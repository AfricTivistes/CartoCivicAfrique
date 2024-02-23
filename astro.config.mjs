import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import { SITE } from './src/utils/config.ts';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

const isProd = process.env.NODE_ENV === "production";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  site: SITE.site,
  base: SITE.base,
});
