import { defineConfig } from "astro/config";
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
  }), tailwind(), icon(), react()],
  output: "server",
  adapter: cloudflare({
    imageService: "passthrough"
  })
});