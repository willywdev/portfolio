import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

import biome from "astro-biome";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, icon(), react(), biome()],
  output: "server",
  adapter: vercel()
});