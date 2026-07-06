import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // UPDATE THIS LINE: We changed the pattern to match both .md and .mdx files!
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string())
  })
});

export const collections = {
  'blog': blogCollection,
};