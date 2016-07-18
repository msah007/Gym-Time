//singleton.js
//5.Find the only element in an array that only occurs once
//strategies
// - brute force: for each element, loop through array and see if it occurs more than once, skip if so, stop on first one that doesn't
// - slightly better: 
//input: array of elements where there is one singleton object
// corner cases:
// - mixed types
// - huge numbers of elements
// - invalid input (more than one singleton) -> return the tie

const assert = require('assert');

const tBase = [0,0,1,1,2,2,3];
const aBase = 3;
const tUnordered = [0,3,1,2,0,3,2];
const aUnordered = 1;
const tTypes = [0, 'a', 'a', 0, "string"];
const aTypes =  "string";
const tDuplicate = [0,1,1,2,2,3];//exception
const aDuplicate = "exception"

//loops through each element, checking that element against the input with itself removed in order
//worst case O(n^2)
function findSingletonBrutish (input) {
	var returnThis = [];
	for (var i = 0; i < input.length; i++) {
		var foundIt = false;
		//console.log("================== " + i + " =======")
		var tempArray = input.slice();
		var thisOne = tempArray.splice(i, 1);
		tempArray.some(function(item, index) {
			//console.log("some loop: " + item + " compared to: " + thisOne)
			if (item == thisOne) {
				foundIt = true;
				return true;
			}
			//return item === thisOne;
		});
		if (!foundIt) {
			//console.log("should add: " + thisOne);
			//console.log("return array: " + returnThis.toString());
			returnThis.length == 0 ? returnThis.push(thisOne[0]) : returnThis.fill("exception");
		}
	}
	return returnThis[0];
}


//loop through the input, put stuff in a map
//stack overflow says we can treat map inserts and lookups as "effectively" constant time
//so worst case is O(2n) ~ O(n)
function findSingletonLookup (input) {
	var returnThis = [];
	var counts = new Map();
	input.forEach(function(item) {
		counts.has(item) ? counts.set(item, counts.get(item) + 1) : counts.set(item, 1);
	});
	counts.forEach(function(value, key) {
		if (value == 1) {
			returnThis.length == 0 ? returnThis.push(key) : returnThis.fill("exception"); 
		}
	});
	return returnThis[0];
}


var methods = [findSingletonBrutish, findSingletonLookup];
var inputs = [[tBase, aBase], [tUnordered, aUnordered], [tTypes, aTypes], [tDuplicate, aDuplicate]];

methods.forEach(function(method) {
	console.log("Testing " + method.name + " -------------------");
	inputs.forEach(function(answerPair){
		var answer = method(answerPair[0]);
		console.log("Tested " + method.name + " with " + answerPair[0] + " -> " + answer);
		assert(answer == answerPair[1], typeof(answer) + " " + answer + " is not " + typeof(answerPair[1]) + " " + answerPair[1]);
	});
});
