// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

const SITE_URL = 'https://alpeshpatel.dev';

export default defineConfig({
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()]
  },
  integrations: [sitemap()]
});
