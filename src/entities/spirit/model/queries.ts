import { getSpirits } from '@entities/spirit';
import { spiritQueryKeys } from '@entities/spirit/model/queryKeys';
import { useQuery } from '@tanstack/react-query';

export function useSpiritsQuery(filters?: unknown) {
	return useQuery({
		queryKey: spiritQueryKeys.all(filters),
		queryFn: () => getSpirits(filters),
	});
}
