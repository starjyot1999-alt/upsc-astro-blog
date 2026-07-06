import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://my-upsc-prep-hub.com',
  base: '/upsc-astro-blog',
  integrations: [mdx(), sitemap()],
});