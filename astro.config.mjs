import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import million from "million/compiler";
import vercel from "@astrojs/vercel/serverless";
import astroI18Next from "astro-i18next";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [million.vite({
    mode: "react",
    server: true
    // compress needs to be last always
  }), tailwind(), icon(), astroI18Next(), react(), playformCompress()],
  output: "server",
  adapter: vercel()
});