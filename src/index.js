/* 
Question 1
    Write some code (including tests) that will reverse an array of arbitrary 
    elements in place along 
    with any arrays (or  arrays of arrays). 
    For example: [1, 2, [3, 4, 5], [6, [7, 8], 9]] => [[9, [8, 7], 6], [5, 4, 3], 2, 1]
*/

//Created everse in place, using ES6 Destructuring swap [a, b] = [b, a]
function reverse(arr) {
	for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
		//swaps values as long as index of i < j
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
}

// Reverses Array of Arrays

function reverseInPlace(arr) {

	if (Array.isArray(arr)) {
		reverse(arr);
	} else {
		return arr;
	}
	//Recursively call in order to reverse inner array elements.
	for (let element of arr) {
		reverseInPlace(element);
	}
	return arr;
}

/*
Question 2
    We have an API that returns JSON-encoded data related to one of our Remesh sessions. 
    Our API returns four types of data: users, questions, messages, and votes.
    Users have an id, age, sex, income bracket, and living environment attribute.
    Questions have an id and text. Messages have an id, text, creatorId, and questionId.
    Votes have an id, userId, and messageId.

    Write code that accepts a JSON response and provides functions that allow us to group messages 
    by any combination of users, ages, sexes, incomes, or living environments.
 */
function Remesh() {}

module.exports = {
	reverse,
	reverseInPlace,
	Remesh
};
