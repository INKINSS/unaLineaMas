import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
    loader: glob({
        pattern: '**/*.md',
        base: './src/content',
    }),
    schema: z.object({
        title: z.string().optional(),
        titleSideBar: z.string().optional(),
        description: z.string().optional(),
        slug: z.string().optional(),
        readTime: z.string().optional(),
        author: z.string().optional(),
        category: z.string().optional(),
        datePublish: z.string().optional(),
    }),
});

export const collections = {
    articles,
};
