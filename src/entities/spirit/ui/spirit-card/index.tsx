import { Card } from '@shared/ui';
import { ReactNode } from 'react';
import { Spirit } from '../../model/types';
import { StatusBadge } from '../status-badge';
import { ThreatBadge } from '../threat-badge';
import styles from './styles.module.scss';

type SpiritCardProps = {
	spirit: Spirit;
	actions: ReactNode;
};

export const SpiritCard = ({ spirit, actions }: SpiritCardProps) => {
	return (
		<Card className={styles.card}>
			<header className={styles.header}>
				<h3 className={styles.name}>{spirit.name}</h3>

				<ThreatBadge status={spirit.threatLevel} />
			</header>

			<div className={styles.meta}>
				<span className={styles.location}>{spirit.location}</span>

				<StatusBadge status={spirit.status} />
			</div>

			<footer className={styles.footer}>{actions}</footer>
		</Card>
	);
};
