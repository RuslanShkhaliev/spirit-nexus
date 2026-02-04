import { fetchClient } from '@api/fetch-client';
import { Spirit } from '@entities/spirit';

export const getSpirits = async (filters?: unknown): Promise<Spirit[]> => {
	return fetchClient.get<Spirit[]>('/api/spirits');
};
