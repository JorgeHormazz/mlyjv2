import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import node from "@astrojs/node";

export default defineConfig({
  site: "https://mlyjvcorretajes.cl",
  output: "server", // necesario para leer Supabase en cada request
  adapter: node({ mode: "standalone" }), // cambia por @astrojs/vercel o @astrojs/netlify según tu hosting
  integrations: [tailwind({ applyBaseStyles: false })],
});
