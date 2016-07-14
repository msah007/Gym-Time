//implement a trie lol
// trie: prefix tree, every node is a prefix to the word which is the leaf
// use a map for each level with letter as key and value being pointer to child map
// operations: 
//  - getChild(node, word): Check this node for substrings of word, return child or undefined child could be   
//  - setChild(node, word): Set value for word in this node
//  - isDuplicate(word): return boolean if whole word is in the trie
//  - newFile(word): insert word into the trie, return true if it was already there (duplicate) and false if it was inserted 
//  

var rootNode = new Map();

function getChild (node, word) {
  var numSubstrings = word.length;
  for (var i = 0; i <= numSubstrings; i++) {
    var substring = word.substr(0, i);
    console.log(substring);
    if (node.has(substring)){
      return node.get(substring);
    }
  }
  return undefined;
}

function setChild (node, word, value) {
  node.set(word, value)
}

function isDuplicate(word) {
  var node = rootNode;
  var numSubstrings = word.length;
  for (var i = 0; i <= numSubstrings; i++) {
    var substring = word.substr(0, i);
    var child = getChild(node, substring);
    if (typeof child === 'string') //we found the leaf node, now compare the rest of the words
  }
}

function newWord(word) {

}

testword = "Frankenstein";
rootNode.set("Frank", "enstein");


console.log(get(rootNode, testword));