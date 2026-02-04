import { faker } from '@faker-js/faker';

export const randomize = (max: number) => {
	return faker.number.int({
		min: 0,
		max,
	});
};

export const getRandomItem = <T>(arr: T[]): T => {
	const index = randomize(arr.length - 1);
	return arr[index];
};
