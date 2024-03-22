import { defineConfig } from "astro/config";
import { astroImageTools } from "astro-imagetools";
import tailwind from "@astrojs/tailwind";
import icon from "astro-icon";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), astroImageTools, icon(), react()]
});