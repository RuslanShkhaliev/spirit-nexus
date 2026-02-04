import { SpiritStatus } from '@entities/spirit';
import clsx from 'clsx';
import styles from './StatusBadge.module.scss';

type Props = {
	label: string;
	variant: SpiritStatus;
};

export const StatusBadge = ({ label, variant }: Props) => {
	return <span className={clsx(styles.badge, styles[variant])}>{label}</span>;
};
