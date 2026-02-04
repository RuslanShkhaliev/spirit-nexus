import { fetchClient } from '@api/fetch-client';
import { SPIRIT_ENDPOINTS } from '../model/endpoints';
import { Spirit } from '../model/types';

export const getSpirits = async (): Promise<Spirit[]> => {
	return fetchClient.get<Spirit[]>(SPIRIT_ENDPOINTS.all);
};
