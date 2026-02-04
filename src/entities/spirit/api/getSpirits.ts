import { fetchClient } from '@api/fetch-client';
import { spiritSchema } from '@entities/spirit';
import { z } from 'zod';
import { SPIRIT_ENDPOINTS } from '../model/endpoints';
import { Spirit } from '../model/types';

export const getSpirits = async (): Promise<Spirit[]> => {
	const data = await fetchClient.get<Spirit[]>(SPIRIT_ENDPOINTS.all);

	return z.array(spiritSchema).parse(data);
};
