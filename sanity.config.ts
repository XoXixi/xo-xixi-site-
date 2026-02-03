"use client";

import { visionTool } from "@sanity/vision"; // Corrigido: @sanity/vision
import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";

// Ajustei o caminho para garantir que ele ache a pasta src na raiz
import { schema } from "./src/sanity/schemaTypes"; 

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET!;

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool(),
    visionTool(),
  ],
});