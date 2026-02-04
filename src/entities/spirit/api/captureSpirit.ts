import { fetchClient } from '@api/fetch-client';
import { spiritSchema } from '@entities/spirit';
import { SPIRIT_ENDPOINTS } from '../model/endpoints';
import { Spirit } from '../model/types';

export const captureSpirit = async (id: number): Promise<Spirit> => {
	const data = await fetchClient.post<Spirit>(SPIRIT_ENDPOINTS.capture(id));

	return spiritSchema.parse(data);
};
