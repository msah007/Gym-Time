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
const aBase = [3];
const tUnordered = [0,3,1,2,0,3,2];
const aUnordered = [1];
const tDuplicate = [0,1,1,2,2,3];
const aDuplicate = [0,3];
const tTypes = [0, 'a', 'a', 0, "string"];
const aTypes =  ["string"];



function findSingletonBrutish (input) {
	const inputSize = input.length;
	var returnThis = [];
	input.forEach(function(item, index) {
		const element = item;
		//some returns true as soon as any of the callbacks return true
		input.some(function(subItem,index) { 
			if (index >= inputSize){
				returnThis.push(element);
			} else {
				if (element === subItem) {
					return true;
				}
			}
		});
	});
	return returnThis;
}


var methods = [findSingletonBrutish];
var inputs = [[tBase, aBase], [tUnordered, aUnordered], [tDuplicate, aDuplicate], [tTypes, aTypes]];

methods.forEach(function(method) {
	console.log("Testing " + str(method) + "-------------------");
	inputs.forEach(function(answerPair){
		console.log("Testing with" + method + " with " + answerPair[0]);
		assert(method(answerPair[0]) === answerPair[1]);
	});
});