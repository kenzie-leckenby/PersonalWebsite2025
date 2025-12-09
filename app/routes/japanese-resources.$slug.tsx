import fs from "fs/promises";
import path from "path";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Container, Typography } from "@mui/material";

export async function loader({ params }: LoaderFunctionArgs) {
  const { slug } = params;
  if (!slug) {
    throw new Response("Not found", { status: 404 });
  }

  const filePath = path.join(process.cwd(), "app/japanese-resources-htmls", `${params.slug}.html`);
  const html = await fs.readFile(filePath, "utf-8");

  return { html };
}

export default function BlogPostPage() {
  const { html } = useLoaderData<typeof loader>();
  return (
    <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }}>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </Container>
  );
}