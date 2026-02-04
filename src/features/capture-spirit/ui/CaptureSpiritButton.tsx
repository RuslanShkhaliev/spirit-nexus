'use client';

import { SpiritStatus } from '@entities/spirit';
import { Button } from '@shared/ui';
import { useCallback } from 'react';
import toast from 'react-hot-toast';
import { useCaptureSpiritMutation } from '../model/mutations';

type Props = {
	spiritId: number;
	status: SpiritStatus;
};

export const CaptureSpiritButton = ({ spiritId, status }: Props) => {
	const { mutate, isPending } = useCaptureSpiritMutation();

	const isCaptured = status === SpiritStatus.CAPTURED;

	const handleCapture = useCallback(() => {
		mutate(spiritId, {
			onError: () => {
				toast.error('Не удалось');
			},
		});
	}, [spiritId, mutate]);
	return (
		<Button
			onClick={handleCapture}
			disabled={isCaptured || isPending}
		>
			{isCaptured ? 'Захвачен' : isPending ? 'Захват...' : 'Захватить'}
		</Button>
	);
};
