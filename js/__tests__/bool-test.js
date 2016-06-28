jest.unmock('../boolean');

describe('boolean', () => {
	it('returns True if a and b are equivalent', () => {
		const bool = require('../app/structures/boolean');
		const True, False = 1, 0;
		expect(bool.equal(1, 1)).toBe(True);
	});
});