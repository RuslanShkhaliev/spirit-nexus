import { MOCKS_CONFIG } from '@config/mocks';
import { Spirit, ThreatLevel } from '@entities/spirit';
import { createSpiritMock } from './_helpers';

export const threatLevels: ThreatLevel[] = Object.values(ThreatLevel);
type SpiritsMap = Map<number, Spirit>;

export const spiritsMapMock: SpiritsMap = Array(MOCKS_CONFIG.SPIRITS_COUNT)
	.fill(null)
	.reduce((map, _, index) => {
		const id = index + 1;

		const spirit: Spirit = createSpiritMock(id);

		map.set(id, spirit);

		return map;
	}, new Map());

export const spiritsMock: Spirit[] = [...spiritsMapMock.values()];
