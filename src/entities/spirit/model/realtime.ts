'use client';

import { spiritSchema } from '@entities/spirit';
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
			const parsedData: Spirit = JSON.parse(event.data);
			const data = spiritSchema.parse(parsedData);

			queryClient.setQueryData<Spirit[]>(spiritQueryKeys.all(), (old) =>
				old?.map((s) => (s.id === data.id ? data : s)),
			);
		});

		return () => source.close();
	}, [queryClient]);
};
