import { fetchClient } from '@api/fetch-client';
import { SPIRIT_ENDPOINTS } from '../model/endpoints';
import { Spirit } from '../model/types';

export const captureSpirit = (id: number): Promise<Spirit> => {
	return fetchClient.post(SPIRIT_ENDPOINTS.capture(id));
};
