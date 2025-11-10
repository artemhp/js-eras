import { defineCollection, z } from 'astro:content';

const slides = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		order: z.number(),
		category: z.enum(['introduction', 'era', 'transition', 'interlude', 'conclusion', 'bonus']),
		date: z.string().optional(),
		tags: z.array(z.string()).optional()
	})
});

export const collections = { slides };
