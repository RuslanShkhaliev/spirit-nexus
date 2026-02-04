import { RequestContext } from '@api/fetch-client/types';

export class RequestError extends Error {
	public context: RequestContext;
	constructor(ctx: RequestContext) {
		super('Failed to fetch');
		this.context = ctx;
	}
}
