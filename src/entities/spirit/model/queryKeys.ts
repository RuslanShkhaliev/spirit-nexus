export const spiritQueryKeys = {
	all: (filters?: unknown) => ['spirits', filters] as const,
	capture: ['spirit-capture'],
} as const;
