'use client';

import clsx from 'clsx';
import type { ButtonHTMLAttributes } from 'react';
import styles from './styles.module.scss';

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ className, ...props }: Props) => {
	return (
		<button
			{...props}
			className={clsx(styles.button, className)}
		/>
	);
};
