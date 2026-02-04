import { Spirit, SpiritStatus } from '@entities/spirit';
import { faker } from '@faker-js/faker';
import { getRandomItem } from '@utils/random';
import { threatLevels } from './_constants';

export function createSpiritsMocks(count: number): Map<number, Spirit> {
	const map = new Map<number, Spirit>();

	for (let i = 1; i <= count; i++) {
		map.set(i, createSpiritMock(i));
	}

	return map;
}

const createSpiritMock = (id: number): Spirit => ({
	id,
	name: faker.person.firstName(),
	threatLevel: getRandomItem(threatLevels),
	location: faker.location.city(),
	status: SpiritStatus.ACTIVE,
});
