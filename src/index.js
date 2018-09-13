/* 
Question 1
    Write some code (including tests) that will reverse an array of arbitrary 
    elements in place along 
    with any arrays (or  arrays of arrays). 
    For example: [1, 2, [3, 4, 5], [6, [7, 8], 9]] => [[9, [8, 7], 6], [5, 4, 3], 2, 1]
*/


//Created reverse in place, using ES6 Destructuring swap [a, b] = [b, a]
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

module.exports = {
	reverse,
	reverseInPlace
};
