import { z } from 'zod';
import { spiritSchema, spiritsListSchema } from './schema';

export type Spirit = z.infer<typeof spiritSchema>;
export type SpiritsList = z.infer<typeof spiritsListSchema>;
export enum ThreatLevel {
	LOW = 'low',
	MEDIUM = 'medium',
	HIGH = 'high',
	CRITICAL = 'critical',
}
export enum SpiritStatus {
	ACTIVE = 'active',
	CAPTURED = 'captured',
}
