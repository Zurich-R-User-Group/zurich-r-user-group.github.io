// 1. Import utilities from `astro:content`
import { z, defineCollection, render } from 'astro:content';
import { glob } from 'astro/loaders';


// 2. Define your collection(s)
const teamCollection = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/team" }),
  schema: z.object({
    draft: z.boolean(),
    name: z.string(),
    title: z.string(),
    avatar: z.object({
      //src: z.string(),
      alt: z.string(),
    }),
    publishDate: z.string().transform(str => new Date(str)),
  }),
});

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  'team': teamCollection,
};