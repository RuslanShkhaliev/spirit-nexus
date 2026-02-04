import { Spirit, SpiritStatus, ThreatLevel } from '@entities/spirit';
import { faker } from '@faker-js/faker';
import { getRandomItem } from '@utils/random';
import { spiritsMock, threatLevels } from './_mock';

export const createSpiritMock = (id: number): Spirit => ({
	id,
	name: faker.person.firstName(),
	threatLevel: getRandomItem(threatLevels),
	location: faker.location.city(),
	status: SpiritStatus.ACTIVE,
});
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
