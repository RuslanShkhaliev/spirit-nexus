import { beforeEach, describe, expect, it, vi } from 'vitest';
import { RequestError } from './exception';
import { fetchClient } from './index';

const mockFetch = vi.fn();

global.fetch = mockFetch as unknown as typeof fetch;

describe('fetchClient', () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it('returns parsed json on success', async () => {
		const data = { ok: true };

		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: vi.fn().mockResolvedValueOnce(data),
		});

		const result = await fetchClient<typeof data>('/test');

		expect(fetch).toHaveBeenCalledWith('/test', undefined);
		expect(result).toEqual(data);
	});

	it('throws RequestError on non-ok response', async () => {
		mockFetch.mockResolvedValueOnce({
			ok: false,
		});

		await expect(fetchClient('/test')).rejects.toBeInstanceOf(RequestError);
	});

	it('passes init options to fetch', async () => {
		mockFetch.mockResolvedValueOnce({
			ok: true,
			json: vi.fn().mockResolvedValueOnce({}),
		});

		await fetchClient('/test', { headers: { Authorization: 'token' } });

		expect(fetch).toHaveBeenCalledWith('/test', {
			headers: { Authorization: 'token' },
		});
	});
});
