//1.Find the most frequent integer in an array
//strategies
// - brute force: for each item in the array, count number of occurrences O(n^2) time, O(n) space
// - slightly better: iterate through array, keep count in a dictionary and keep track of the leader, then iterate through the hash and output O(n*2)(??) time, O(log(n)) space
// - 
//corner cases
// - what if two numbers tie for most frequent? return an array with all the ties
// - handle strange numbers - negative, huge
// - huge number of entries
// - bad input - various types - can't identify the same object easily (maybe stringify)

const basic = [0, 1, 2, 2, 3];
const basicAnswer = 2;
const tie = [0, 0, 1, 1, 2, 2, 3, 3, 4, 5];
const tieAnswer = [0,1,2,3];
const badInput = ['a', 0, 1, 1, 'a', {name:"curveball"}, {name:"curveball"}]



function count (inputArray) {
  var counts = new Map();
  var leader = 0;
  var returnArray = [];
  inputArray.forEach(function(item, index) {
    if (!counts.has(item)) {
      counts.set(item, 1);
    } else {
      counts.set(item, counts.get(item) + 1);
    }
    if (leader < counts.get(item)) {
      leader = counts.get(item);
    }
  });
  //console.log(counts)
  counts.forEach(function(value, key) {
    if (value >= leader) {
      returnArray.push(key);
    }
  });
  return returnArray;
}

console.log("basic (answer = [2]): " + JSON.stringify(count(basic)));
console.log("tie (answer = [0,1,2,3]: " + JSON.stringify(count(tie)));
console.log("badInput (answer = [a, 1, object{curveball}] : " + JSON.stringify(count(badInput))); //can't handle objects