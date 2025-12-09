import * as React from 'react';
import { useLoaderData } from '@remix-run/react';
import Typography from '@mui/material/Typography';
import BlogThumbnail from '~/src/blogThumbnail';
import { Container } from '@mui/material';
import darkTheme from '~/src/theme';
import fs from 'fs/promises';
import path from 'path';
import matter from 'gray-matter';

export async function loader() {
  const blogDir = path.join(process.cwd(), 'content', 'blog');

  try {
    const files = await fs.readdir(blogDir);
    const posts = await Promise.all(
      files
        .filter(file => file.endsWith('.md'))
        .map(async (file) => {
          const filePath = path.join(blogDir, file);
          const fileContent = await fs.readFile(filePath, 'utf-8');
          const { data } = matter(fileContent);
          const slug = file.replace('.md', '');

          return {
            slug,
            title: data.title,
            date: data.date,
            synopsis: data.synopsis,
            tags: data.tags || [],
          };
        })
    );

    // Sort by date (newest first) - you might want to improve date parsing
    return { posts };
  } catch (error) {
    return { posts: [] };
  }
}

export default function Blog() {
  const { posts } = useLoaderData<typeof loader>();

  return (
    <React.Fragment>
      <Container maxWidth='xl' disableGutters>
        <Typography variant="h3" component="h1" sx={{
          mt: 2,
          pb: 2,
          mb: 4,
          fontWeight: 500,
          borderBottom: `2px solid ${darkTheme.palette.divider}`
        }}>
          Welcome to my blog!
        </Typography>

        {posts.map((post) => (
          <BlogThumbnail
            key={post.slug}
            title={post.title}
            date={post.date}
            synopsis={post.synopsis}
            tags={post.tags}
            link={post.slug}
          />
        ))}
      </Container>
    </React.Fragment>
  );
}
