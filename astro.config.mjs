import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import million from "million/compiler";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [million.vite({
    mode: "react",
    server: true
  }), tailwind(), astroImageTools, icon(), react()],
  output: "hybrid",
  adapter: cloudflare()
});