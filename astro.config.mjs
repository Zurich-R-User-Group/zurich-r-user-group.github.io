import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  site: "https://mbannert.github.io",
  base: "/webdemo",
  trailingSlash: 'always',
  integrations: [tailwind(), mdx(), sitemap(), icon()],
  '@':'/src'
});
