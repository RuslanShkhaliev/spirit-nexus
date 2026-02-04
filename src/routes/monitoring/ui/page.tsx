'use client';

import { SpiritList } from '@widgets/spirit-list';
import styles from './styles.module.scss';

export const MonitoringPage = () => {
	return (
		<div className={styles.page}>
			<SpiritList />
		</div>
	);
};
