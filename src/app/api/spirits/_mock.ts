import { Spirit, ThreatLevel } from '@entities/spirit';
import { faker } from '@faker-js/faker';

const threatLevels = Object.values(ThreatLevel);
type SpiritsStore = Map<number, Spirit>;

export const spiritsMapMock: SpiritsStore = Array(40)
	.fill(null)
	.reduce((spirits, _, index) => {
		const id = index + 1;

		const spirit = createSpiritMock(id);

		spirits.set(id, spirit);

		return spirits;
	}, new Map());

function createSpiritMock(id: number) {
	const randomThreatLevelIndex = faker.number.int({
		min: 0,
		max: threatLevels.length - 1,
	});
	return {
		id,
		name: faker.person.firstName(),
		threatLevel: threatLevels[randomThreatLevelIndex],
		location: faker.location.city(),
		status: 'active',
	};
}
export const spiritsMock: Spirit[] = [...spiritsMapMock.values()];
