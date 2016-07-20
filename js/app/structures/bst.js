//26.Implement a BST with insert and delete functions
// binary search tree - otherwise known as a sorted binary tree
// -- insert sorted
// -- delete
//problems:
// -- when to rebalance? 
// how do we know what's the mid point?

var assert = require("assert");

var Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
}

Node.prototype.updateRight = function(newTarget) {
  this.right = new Node(newTarget);
};
Node.prototype.updateLeft = function(newTarget) {
  this.left = new Node(newTarget);
};


//return bool when we find it or not
Node.prototype.has = function(searchValue) {
  if (this.value === searchValue) {
    return true;
  } else {
    if (searchValue < this.value) {
      //console.log(this.left.value)
      return this.left == null ? false : this.left.has(searchValue);
    } else {
      //console.log(this.right.value)
      return this.right == null ? false : this.right.has(searchValue);
    }
  }
};

//return the node when we find it or null
Node.prototype.search = function(searchValue) {
  if (this.value === searchValue) {
    return this;
  } else {
    if (searchValue < this.value) {
      return this.left == null ? null : this.left.search(searchValue);
    } else {
      return this.right == null ? null : this.right.search(searchValue);
    }
  }
};

Node.prototype.insert = function(newValue) {
  if (this.value === newValue) {

  }
};

var testNode = new Node(2);
assert(testNode.value === 2, "Node constructor didn't work");
testNode.updateLeft(1);
assert(testNode.left.value === 1, "Node updateLeft didn't work");
testNode.updateRight(3);
assert(testNode.right.value === 3, "Node updateRight didn't work");
testNode.right.updateRight(4);
assert(testNode.right.right.value === 4, "Updating the child's left didn't work")
assert(testNode.has(1), "has didn't find 1 left branch");
assert(testNode.has(2), "has didn't find 2 root node");
assert(testNode.has(3), "has didn't find 3 right branch");
assert(testNode.search(2) == testNode, "search didn't find root node");
assert(testNode.search(1) == testNode.left, "search didn't find 1 left branch");
assert(testNode.search(3) == testNode.right, "search didn't find 3 right branch");
assert(testNode.has(4), "has didn't find 4 right.left");
testNode.insert(5);
assert(testNode.has(5), "has didn't find the insert(5)");


console.log(Node.magic());