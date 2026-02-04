'use client';

import { SpiritCard, useSpiritsQuery, useSpiritStream } from '@entities/spirit';
import { CaptureSpiritButton } from '@features/capture-spirit';
import styles from './styles.module.scss';

export const SpiritList = () => {
	const { data, isLoading, isError } = useSpiritsQuery();
	useSpiritStream();
	if (isLoading) return <div>Loading...</div>;
	if (isError || !data) return <div>Error</div>;

	return (
		<ul className={styles.list}>
			{data.map((spirit) => (
				<li key={spirit.id}>
					<SpiritCard
						spirit={spirit}
						actions={
							<CaptureSpiritButton
								spiritId={spirit.id}
								status={spirit.status}
							/>
						}
					/>
				</li>
			))}
		</ul>
	);
};
