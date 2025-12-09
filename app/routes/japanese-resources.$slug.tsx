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

export default function ResourcePage() {
  const { html } = useLoaderData<typeof loader>();

  return (
    <Container maxWidth="xl" sx={{ mt: 2, mb: 4 }} disableGutters>
      <iframe
        src={`/japanese-resources/${html}.html`}
        style={{
          width: "100%",
          height: "90vh",
          border: "none",
          background: "white",
        }}
      />
    </Container>
  );
}