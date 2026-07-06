import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://starjyot1999-alt.github.io/upsc-astro-blog/',
  base: '/upsc-astro-blog',
  integrations: [mdx(), sitemap()],
});