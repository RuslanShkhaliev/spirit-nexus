import { MOCKS_CONFIG } from '@config/mocks';
import { Spirit } from '@entities/spirit';
import { createSpiritsMocks } from './_helpers';

type SpiritsMap = Map<number, Spirit>;

export const spiritsMapMock: SpiritsMap = createSpiritsMocks(
	MOCKS_CONFIG.SPIRITS_COUNT,
);

export const spiritsMock: Spirit[] = [...spiritsMapMock.values()];
