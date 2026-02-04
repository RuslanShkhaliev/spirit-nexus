import { SpiritStatus } from '@entities/spirit';
import { Badge, BadgeVariant } from '@shared/ui';

const variants = {
	[SpiritStatus.ACTIVE]: BadgeVariant.INFO,
	[SpiritStatus.CAPTURED]: BadgeVariant.SUCCESS,
} as const;

interface StatusBadgeProps {
	status: SpiritStatus | `${SpiritStatus}`;
}
export const StatusBadge = ({ status }: StatusBadgeProps) => {
	return (
		<Badge
			label={status}
			variant={variants[status]}
		/>
	);
};
