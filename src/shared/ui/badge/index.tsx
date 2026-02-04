import clsx from 'clsx';
import styles from './styles.module.scss';

export enum BadgeVariant {
	NEUTRAL = 'neutral',
	INFO = 'info',
	SUCCESS = 'success',
	WARN = 'warning',
	DANGER = 'danger',
	ATTENTION = 'attention',
}

interface BadgeProps {
	label: string;
	variant: BadgeVariant;
}
export const Badge = ({ label, variant }: BadgeProps) => {
	return <span className={clsx(styles.badge, styles[variant])}>{label}</span>;
};
