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

  if (slug.includes('/') || slug.includes('..')) {
    throw new Response("Invalid slug", { status: 400 });
  }

  return { slug};
}

export default function ResourcePage() {
  const { slug } = useLoaderData<typeof loader>();

  return (
    <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }} disableGutters>
      <iframe
        src={`/japanese-resources-htmls/${slug}.html`}
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
        }}
      />
    </Container>
  );
}