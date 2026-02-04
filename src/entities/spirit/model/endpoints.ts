export const SPIRIT_ENDPOINTS = {
	all: '/api/spirits',
	stream: '/api/spirits/stream',
	capture: (id: number) => `/api/spirits/${id}` as const,
} as const;
