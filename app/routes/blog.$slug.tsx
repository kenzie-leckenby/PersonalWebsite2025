import fs from "fs/promises";
import path from "path";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Container, Typography, Box, Chip } from "@mui/material";
import matter from "gray-matter";
import MarkdownIt from "markdown-it";
import hljs from "highlight.js";

// Initialize markdown-it with syntax highlighting
const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(str, { language: lang }).value;
      } catch (__) {}
    }
    return ''; // use external default escaping
  }
});

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Not found", { status: 404 });
  }

  try {
    // Read the markdown file
    const filePath = path.join(process.cwd(), "content", "blog", `${slug}.md`);
    const fileContent = await fs.readFile(filePath, "utf-8");

    // Parse frontmatter and content
    const { data, content } = matter(fileContent);

    // Convert markdown to HTML
    const html = md.render(content);

    return {
      frontmatter: data,
      html,
      slug,
    };
  } catch (error) {
    throw new Response("Blog post not found", { status: 404 });
  }
}

export default function BlogPost() {
  const { frontmatter, html } = useLoaderData<typeof loader>();

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 8 }}>
      {/* Title */}
      <Typography variant="h3" component="h1" sx={{ mb: 2, fontWeight: 600 }}>
        {frontmatter.title}
      </Typography>

      {/* Date */}
      <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 2 }}>
        {frontmatter.date}
      </Typography>

      {/* Tags */}
      {frontmatter.tags && (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
          {frontmatter.tags.map((tag: string) => (
            <Chip
              key={tag}
              label={tag}
              variant="outlined"
              size="small"
            />
          ))}
        </Box>
      )}

      {/* Content */}
      <Box
        sx={{
          '& img': { maxWidth: '100%', height: 'auto' },
          '& pre': {
            backgroundColor: '#1e1e1e',
            padding: 2,
            borderRadius: 1,
            overflow: 'auto',
          },
          '& code': {
            backgroundColor: '#2d2d2d',
            padding: '2px 6px',
            borderRadius: '4px',
            fontSize: '0.9em',
          },
          '& pre code': {
            backgroundColor: 'transparent',
            padding: 0,
          },
          '& h2': { mt: 4, mb: 2, fontWeight: 600 },
          '& h3': { mt: 3, mb: 1.5, fontWeight: 600 },
          '& p': { mb: 2, lineHeight: 1.7 },
          '& a': { color: 'primary.main', textDecoration: 'underline' },
          '& ul, & ol': { mb: 2, pl: 4 },
          '& li': { mb: 1 },
          '& blockquote': {
            borderLeft: '4px solid',
            borderColor: 'primary.main',
            pl: 2,
            ml: 0,
            fontStyle: 'italic',
            color: 'text.secondary',
          },
        }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Container>
  );
}