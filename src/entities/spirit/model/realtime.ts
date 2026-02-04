'use client';

import { useQueryClient } from '@tanstack/react-query';
import { useEffect } from 'react';
import { SPIRIT_ENDPOINTS } from './endpoints';
import { spiritQueryKeys } from './queryKeys';
import { Spirit } from './types';

export const useSpiritStream = () => {
	const queryClient = useQueryClient();

	useEffect(() => {
		const source = new EventSource(SPIRIT_ENDPOINTS.stream);

		source.addEventListener('spirit:update', (event) => {
			const updated: Spirit = JSON.parse(event.data);

			queryClient.setQueryData<Spirit[]>(spiritQueryKeys.all(), (old) =>
				old?.map((s) => (s.id === updated.id ? updated : s)),
			);
		});

		return () => source.close();
	}, [queryClient]);
};
