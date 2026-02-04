import { Card, StatusBadge } from '@shared/ui';
import { Spirit, ThreatLevel } from '../../model/types';
import styles from './SpiritCard.module.scss';

type SpiritCardProps = {
	spirit: Spirit;
	actions: React.ReactNode;
};

export const SpiritCard = ({ spirit, actions }: SpiritCardProps) => {
	return (
		<Card className={styles.card}>
			<header className={styles.header}>
				<h3 className={styles.name}>{spirit.name}</h3>

				<StatusBadge
					label={spirit.threatLevel}
					variant={threatLevelVariant[spirit.threatLevel]}
				/>
			</header>

			<div className={styles.meta}>
				<span className={styles.location}>{spirit.location}</span>

				<StatusBadge
					label={spirit.status}
					variant={spirit.status}
				/>
			</div>

			<footer className={styles.footer}>{actions}</footer>
		</Card>
	);
};

const threatLevelVariant: Record<ThreatLevel, 'low' | 'medium' | 'critical'> = {
	[ThreatLevel.LOW]: 'low',
	[ThreatLevel.MEDIUM]: 'medium',
	[ThreatLevel.CRITICAL]: 'critical',
};
