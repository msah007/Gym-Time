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
//depends on the tree being total ordered
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

//destructive insert returns true if successful
Node.prototype.insert = function(newValue) {
  if (this.value === newValue) {
    return false;
  } else {
    if (newValue < this.value) {
      if (this.left == null) {
        this.left = new Node(newValue);
        return true;
      } else {
        return this.left.insert(newValue)
      }
    } else {
      if (this.right == null) {
        this.right = new Node(newValue);
        return true;
      } else {
        return this.right.insert(newValue);
      }
    }
  }
};

var traverse = function(node) {
  return "";
}

var testNode = new Node(2);
assert(testNode.value === 2, "Node constructor didn't work");
assert(traverse(testNode) == "2", "traverse didn't even return root");
testNode.updateLeft(1);
assert(testNode.left.value === 1, "Node updateLeft didn't work");
assert(traverse(testNode) == "1 2", "traverse didn't return 1 2");
testNode.updateRight(3);
assert(testNode.right.value === 3, "Node updateRight didn't work");
assert(traverse(testNode) == "1 2 3", "traverse didn't return 1 2 3");
testNode.right.updateRight(4);
assert(testNode.right.right.value === 4, "Updating the child's left didn't work");
assert(traverse(testNode) == "1 2 3 4", "traverse didn't return 1 2 3 4");
assert(testNode.has(1), "has didn't find 1 left branch");
assert(testNode.has(2), "has didn't find 2 root node");
assert(testNode.has(3), "has didn't find 3 right branch");
assert(testNode.has(4), "has didn't find 4 right.left");
assert(testNode.search(2) == testNode, "search didn't find root node");
assert(testNode.search(1) == testNode.left, "search didn't find 1 left branch");
assert(testNode.search(3) == testNode.right, "search didn't find 3 right branch");
testNode.insert(5);
assert(testNode.has(5), "has didn't find the insert(5)");
//console.log(traverse(testNode));
assert(traverse(testNode) == "1 2 3 4 5", "traverse didn't return 1 2 3 4 5");

var tree = new Node(6);
assert(tree.insert(3), "tree insert(3) failed");
assert(tree.insert(4), "tree insert(4) failed");
assert(tree.insert(5), "tree insert(5) failed");
assert(tree.has(6), "has didn't find root 6 in tree");
assert(tree.has(3), "has didn't find root 3 in tree");
assert(tree.has(4), "has didn't find root 4 in tree");
assert(tree.has(5), "has didn't find root 5 in tree");
//console.log(traverse(tree))
assert(traverse(tree) == "3 4 5 6")