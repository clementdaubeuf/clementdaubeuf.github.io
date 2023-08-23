// 1. Import utilities from `astro:content`
// @ts-ignore
import { z, defineCollection } from "astro:content";
// 2. Define your collection(s)
const about = defineCollection({
  type: "content",
  schema: z.object({
    text: z.string().default(""),
    link: z.string().default(""),
    linkText: z.string().default(""),
  }),
});
const experiences = defineCollection({
  type: "content",
  schema: z.object({
    position: z.string().default(""),
    company: z.string().default(""),
    companyUrl: z.string().default(""),
    startDate: z.string().default(""),
    endDate: z.string().default(""),
    description: z.string().default(""),
    relatedLinks: z.array(z.any()).default([]),
    technologies: z.array(z.string()).default([]),
  }),
});
// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
  about: about,
  experiences: experiences,
};
