import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import react from "@astrojs/react";
import million from "million/compiler";
import vercel from "@astrojs/vercel/serverless";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [million.vite({
    mode: "react",
    server: true
    // compress needs to be last always
  }), tailwind(), icon(), react(), playformCompress()],
  output: "server",
  adapter: vercel()
});