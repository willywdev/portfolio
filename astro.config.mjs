import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";
import vercel from "@astrojs/vercel/serverless";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

/**
 * Remove Million and React if no React Components are used
 * import react from "@astrojs/react";
 * import million from "million/compiler";
 */

// https://astro.build/config
export default defineConfig({
  integrations: [
  //million.vite({
  //mode: "react",
  //server: true
  // compress needs to be last always
  // }),
  tailwind(), icon(),
  // react(),
  sitemap(), robotsTxt(), playformCompress()],
  output: "hybrid",
  adapter: vercel()
  /**
   * Activate this when this is switched to main domain 
   * site: "https://willyw.dev",
   */
});