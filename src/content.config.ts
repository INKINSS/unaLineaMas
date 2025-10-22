import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
    loader: glob({
        pattern: '**/*.mdx',
        base: './src/content/articles',
    }),
    schema: z.object({
        title: z.string().optional(),
        titleSideBar: z.string().optional(),
        description: z.string().optional(),
        slug: z.string().optional(),
        isRecent: z.boolean().optional(),
        readTime: z.string().optional(),
        author: z.string().optional(),
        category: z.string().optional(),
        datePublish: z.string().optional(),
    }),
});

const contributing = defineCollection({
    loader: glob({
        pattern: '**/*.mdx',
        base: './src/content/contributing',
    }),
    schema: z.object({
        title: z.string().optional(),
        slug: z.string().optional(),
        titleSideBar: z.string().optional(),
        category: z.string().optional(),
    }),
});

export const collections = {
    articles,
    contributing,
};
