// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// Update `site` to the final production URL before go-live (Netlify subdomain or custom domain).
export default defineConfig({
  site: 'https://quincy-townhomes.netlify.app',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
