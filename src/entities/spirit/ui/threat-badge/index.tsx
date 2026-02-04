import { ThreatLevel } from '@entities/spirit';
import { Badge, BadgeVariant } from '@shared/ui';

const variants = {
	[ThreatLevel.LOW]: BadgeVariant.NEUTRAL,
	[ThreatLevel.MEDIUM]: BadgeVariant.ATTENTION,
	[ThreatLevel.HIGH]: BadgeVariant.WARN,
	[ThreatLevel.CRITICAL]: BadgeVariant.DANGER,
} as const;

interface ThreatBadgeProps {
	status: ThreatLevel | `${ThreatLevel}`;
}
export const ThreatBadge = ({ status }: ThreatBadgeProps) => {
	return (
		<Badge
			label={status}
			variant={variants[status]}
		/>
	);
};
