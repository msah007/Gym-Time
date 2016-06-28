//boolean.js
//primitive datatype
//what does a boolean do?
//	stores a value that is either true or false (1 or 0)
//	returns one of those values when compared with !=, ==, >, <, !

const True = 1
const False = 0

function boolean(operand) {
	if (operand) {
		return True;
	}
}

function equal (left, right) {
	if (left == right) {
		return True;
	}
}

function notEqual (left, right) {
	if (left != right) {
		return False;
	}
}

function greaterThan (left, right) {
	if (left > right) {
		return True;
	}
}

function lessThan (left, right) {
	if (left < right) {
		return True;
	}
}

function not (operand) {
	if (!operand) {
		return True;
	}
}

module.exports.True = True;
module.exports.False = False;
module.exports.boolean = boolean;
module.exports.equal = equal;
module.exports.notEqual = notEqual;
module.exports.greaterThan = greaterThan;
module.exports.lessThan = lessThan;
module.exports.not = not;
