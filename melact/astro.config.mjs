import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://jongleb.github.io",
  base: process.env.SITE_BASE ?? "/",
  devToolbar: { enabled: false },
  server: { port: 4321, host: "127.0.0.1" },
  vite: { plugins: [tailwindcss()] },
});
