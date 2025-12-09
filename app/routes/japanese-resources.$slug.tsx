import fs from "fs/promises";
import path from "path";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import { Container, Typography } from "@mui/material";

export async function loader({ params }: LoaderFunctionArgs) {
  const filePath = path.join(process.cwd(), "app/japanese-resources", `app/japanese-resources-htmls/${params.slug}.html`);
  const html = await fs.readFile(filePath, "utf-8");

  return { html };
}

export default function BlogPostPage() {
  const { html } = useLoaderData<typeof loader>();
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}