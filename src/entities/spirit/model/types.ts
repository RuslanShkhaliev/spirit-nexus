import { z } from 'zod';
import { spiritSchema } from './schema';

export type Spirit = z.infer<typeof spiritSchema>;
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
