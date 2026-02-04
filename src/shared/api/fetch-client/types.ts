export type HttpMethod = 'get' | 'post' | 'patch' | 'put' | 'delete';

export type FetchClient = {
	<T = unknown>(input: RequestInfo | URL, init?: RequestInit): Promise<T>;
} & {
	[M in HttpMethod]: <T = unknown>(
		input: RequestInfo | URL,
		init?: RequestInit,
	) => Promise<T>;
};

export type RequestContext = {
	input: RequestInfo | URL;
	init?: RequestInit;
};
