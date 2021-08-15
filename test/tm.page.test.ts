import { Pages } from '../src';

describe('classe TmPage', () => {
	const TmPage = new Pages().tm,
		workingPagesId = [
			25, // Black Clover
			945, // Mushoku Tensei ~Isekai Ittara Honki Dasu~
			452, // Shuumatsu no Valkyrie
			1, // Solo Leveling
			10 // Domestic na Kanojo
		],
		deletedPagesId = [4, 451, 1113, 1784, 2576];

	it(`método get - Ids: ${workingPagesId.join(', ')}`, async () => {
		for (const id of workingPagesId.values())
			await expect(TmPage.get(id)).resolves.toHaveProperty('id');
	});

	it(`método get - Ids: ${workingPagesId.join(', ')}`, async () => {
		for (const id of deletedPagesId.values())
			await expect(TmPage.get(id)).rejects.toThrow(Error);
	});
});
