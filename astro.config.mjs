import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypeMermaid from 'rehype-mermaid'; // 1. Import the Mermaid plugin
import { unified } from '@astrojs/markdown-remark'; // 2. Import the classic processor

export default defineConfig({
  // Keeps your GitHub Pages deployment working perfectly!
  site: 'https://starjyot1999-alt.github.io/upsc-astro-blog/',
  base: '/upsc-astro-blog',
  
  // Keeps both MDX and your Sitemap working together!
  integrations: [mdx(), sitemap()],
  
  // Tells Astro to use the classic processor for your markdown files
  markdown: {
    processor: unified({
      rehypePlugins: [
        rehypeMermaid // 3. Removed the { strategy: 'img-svg' } option to draw directly on the page!
      ]
    }),
    syntaxHighlight: {
      type: 'shiki',
      excludeLangs: ['mermaid']
    }
  }
});