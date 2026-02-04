import clsx from 'clsx';
import type { PropsWithChildren } from 'react';
import styles from './styles.module.scss';

type Props = PropsWithChildren<{
	className?: string;
}>;

export const Card = ({ children, className }: Props) => {
	return <div className={clsx(styles.card, className)}>{children}</div>;
};
