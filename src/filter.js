const fetch = require('whatwg-fetch');
/*
Question 2
    We have an API that returns JSON-encoded data related to one of our Remesh sessions. 
    Our API returns four types of data: users, questions, messages, and votes.
    Users have an id, age, sex, income bracket, and living environment attribute.
    Questions have an id and text. Messages have an id, text, creatorId, and questionId.
    Votes have an id, userId, and messageId.

	Write code that accepts a JSON response and 
	provides functions that allow us to 
	group messages 
		by any combination of (keys):
			users, 
			ages, 
			sexes, 
			incomes, 
			or living environments.

	For example, given parameters of "Male" users aged "18-24"
	and "65+"with incomes "<20,000" and living in "Urban" and "Rural"
	environments, your function would return messages which were 
	voted on only by users fitting those parameters.
	Think of search filters and parameters.
 */



//fetch request returns promise object of users & messages.

function users() {
	const usersEndpoint = 'http://localhost:8080/users';
	return window.fetch(usersEndpoint)
		.then(response => response.json());
}

function messages() {
	const usersEndpoint = 'http://localhost:8080/messages';
	return window.fetch(usersEndpoint)
		.then(response => response.json());
}

//Async functions returning a promise object
async function main() {

	//Awaiting for fetch promise to resolve, then store into local variable.
	const usersData = await users();
	const messagesData = await messages();

	//Store value of filtered messages object
	const filtered = filterBy(messagesData, usersData, {
		//Pass values to be filtered in Users
	})
	return filtered;
}

main();
// makes api request
// :: Id -> User
//Determine User by Message.ID matching User.ID
function getUser(users, id) {
	return users.find(x => x.id === id);
}

//Returns messages object based on options object.
function filterBy(messages, users, options) {
	return messages.filter(message => {
		//find message id that matches user.id
		//user is an array of user objects that match options
		const user = getUser(users, message.id);

		//For every key value pair, within the object options
		for (let [key, value] of Object.entries(options)) {
			//does user value = 
			if (user[key] != value) {
				return false;
			}
		}
		return true;
	});
}

module.exports = {
	users,
	messages,
	main,
	filterBy,
	getUser
}
