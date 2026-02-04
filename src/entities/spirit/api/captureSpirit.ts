import { fetchClient } from '@api/fetch-client';
import { Spirit } from '@entities/spirit';

export const captureSpirit = (id: number): Promise<Spirit> => {
	return fetchClient.post(`/api/spirits/${id}`);
};
