const {
	reverseInPlace
} = require("../index.js");

//Test case for Reversing in place.
describe("reverseInPlace", () => {
	it("[] should be []", () => {
		const input = [];
		const expected = [];
		expect(reverseInPlace(input)).toEqual(expected);
	});
	it("[1] should be [1]", () => {
		const input = [1];
		const expected = [1];
		expect(reverseInPlace(input)).toEqual(expected);
	});
	it("[1, 2] should be [2, 1]", () => {
		const input = [1, 2];
		const expected = [2, 1];
		expect(reverseInPlace(input)).toEqual(expected);
	});
	it("[1, 2, 3] should be [3, 2, 1]", () => {
		const input = [1, 2, 3];
		const expected = [3, 2, 1];
		expect(reverseInPlace(input)).toEqual(expected);
	});
	it("[1, [2, 3],[4, 5]] should be [[5,4], [3,2],1]", () => {
		const input = [1, [2, 3],
			[4, 5]
		];
		const expected = [
			[5, 4],
			[3, 2], 1
		];
		expect(reverseInPlace(input)).toEqual(expected);
	});
	it(`[1, 2, [3, 4, 5],[6, [7, 8], 9]] 
  should be [[9, [8, 7], 6],[5, 4, 3], 2, 1]`, () => {
		const input = [1, 2, [3, 4, 5],
			[6, [7, 8], 9]
		];
		const expected = [
			[9, [8, 7], 6],
			[5, 4, 3], 2, 1
		];
		expect(reverseInPlace(input)).toEqual(expected);
	});
});
