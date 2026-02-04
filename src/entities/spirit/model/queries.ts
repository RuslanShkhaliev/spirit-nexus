import { getSpirits, Spirit } from '@entities/spirit';
import { useQuery } from '@tanstack/react-query';
import { spiritQueryKeys } from './queryKeys';

export function useSpiritsQuery() {
	return useQuery({
		queryKey: spiritQueryKeys.all(),
		queryFn: (): Promise<Spirit[]> => getSpirits(),
	});
}
