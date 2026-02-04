import { HTTP_METHODS } from 'src/shared/api/fetch-client/constants';
import { RequestError } from 'src/shared/api/fetch-client/exception';
import { FetchClient } from 'src/shared/api/fetch-client/types';

export const fetchClient: FetchClient = async <T = unknown>(
	input: RequestInfo | URL,
	init?: RequestInit,
): Promise<T> => {
	const response = await fetch(input, init);

	if (!response.ok) {
		throw new RequestError({ input, init });
	}

	return response.json();
};

HTTP_METHODS.forEach((method) => {
	fetchClient[method] = <T = unknown>(
		input: RequestInfo | URL,
		init?: RequestInit,
	) => fetchClient<T>(input, { ...init, method: method.toUpperCase() });
});
