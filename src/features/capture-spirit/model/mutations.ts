import {
	captureSpirit,
	Spirit,
	spiritQueryKeys,
	SpiritStatus,
} from '@entities/spirit';
import { useMutation, useQueryClient } from '@tanstack/react-query';

type Context = {
	previousSpirits?: Spirit[];
};

export const useCaptureSpiritMutation = () => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: captureSpirit,

		onMutate: async (id: number): Promise<Context> => {
			await queryClient.cancelQueries({
				queryKey: spiritQueryKeys.all(),
			});

			const previousSpirits = queryClient.getQueryData<Spirit[]>(
				spiritQueryKeys.all(),
			);

			queryClient.setQueryData<Spirit[]>(spiritQueryKeys.all(), (old) =>
				old?.map((spirit) =>
					spirit.id === id
						? { ...spirit, status: SpiritStatus.CAPTURED }
						: spirit,
				),
			);

			return { previousSpirits };
		},

		onError: (_err, _id, context) => {
			if (context?.previousSpirits) {
				queryClient.setQueryData(
					spiritQueryKeys.all(),
					context.previousSpirits,
				);
			}
		},
	});
};
