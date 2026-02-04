import { MOCKS_CONFIG } from '@config/mocks';
import { Spirit } from '@entities/spirit';
import { updateThreatLevel } from '../_helpers';

export async function GET() {
	const encoder = new TextEncoder();

	const stream = new ReadableStream({
		start(controller) {
			const interval = setInterval(() => {
				const updated: Spirit = updateThreatLevel();
				controller.enqueue(
					encoder.encode(
						`event: spirit:update\ndata: ${JSON.stringify(updated)}\n\n`,
					),
				);
			}, MOCKS_CONFIG.THREAT_CHANGE_INTERVAL_MS);

			return () => clearInterval(interval);
		},
	});

	return new Response(stream, {
		headers: {
			'Content-Type': 'text/event-stream',
			'Cache-Control': 'no-cache',
			Connection: 'keep-alive',
		},
	});
}
