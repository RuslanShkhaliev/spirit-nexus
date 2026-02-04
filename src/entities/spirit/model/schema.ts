import { z } from 'zod';

export const threatLevelSchema = z.enum(['low', 'medium', 'high', 'critical']);

export const spiritStatusSchema = z.enum(['active', 'captured']);

export const spiritSchema = z.object({
	id: z.number(),
	name: z.string(),
	threatLevel: threatLevelSchema,
	location: z.string(),
	status: spiritStatusSchema,
});

export const spiritsListSchema = z.array(spiritSchema);
