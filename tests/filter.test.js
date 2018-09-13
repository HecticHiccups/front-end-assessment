const {
	users,
	messages,
	filterBy
} = require('../src/filter.js/');

describe("main", () => {
	it('{id:6} should have {id:6}', async () => {
		//expect.assertions(1);
		const UserData = await users();
		const MessageData = await messages();
		const input = {
			id: 6
		};
		const expected = {
			"id": 6
		}

		expect(filterBy(MessageData, UserData, input)).toContain(expected);
	});
});
