import { Spirit, ThreatLevel } from '@entities/spirit';
import { getRandomItem } from '@utils/random';
import { threatLevels } from '../_constants';
import { spiritsMock } from '../_mock';

export const getRandomSpirit = (): Spirit => getRandomItem(spiritsMock);
export const getNextThreat = (
	current: ThreatLevel | `${ThreatLevel}`,
): ThreatLevel => {
	const filtered = threatLevels.filter((item) => item !== current);
	return getRandomItem(filtered);
};

export const updateThreatLevel = (): Spirit => {
	// TODO: возможно стоит исключать "пойманные" духи из выборки и помечать их threatLevel - low.
	const spirit: Spirit = getRandomSpirit();
	spirit.threatLevel = getNextThreat(spirit.threatLevel);

	return spirit;
};
