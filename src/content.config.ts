import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// 1. Define the Blog collection
const blogCollection = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    pubDate: z.date(),
    description: z.string(),
    author: z.string(),
    tags: z.array(z.string()).optional(),
  })
});

// 2. Define the NEW Current Affairs collection
const currentAffairs = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/current-affairs" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    category: z.string().default("Daily News"),
  })
});

// 3. Export BOTH collections together in ONE single statement
export const collections = {
  'blog': blogCollection,
  'current-affairs': currentAffairs 
};