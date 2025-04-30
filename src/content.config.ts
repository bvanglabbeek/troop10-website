import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  // Load Markdown and MDX files in the `content/posts` directory.
  loader: glob({ base: "./content/posts", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    category: z.enum(["Campout", "Newsletter", "General"]),
    month: z.enum(["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]).optional(),
    year: z.number().optional(),
  }),
});

export const collections = { blog };
