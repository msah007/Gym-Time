//26.Implement a BST with insert and delete functions
// binary search tree - otherwise known as a sorted binary tree
// -- insert sorted
// -- delete
//problems:
// -- when to rebalance?
// how do we know what's the mid point?
//todo - fix a messed up tree
//todo - rebalance
//todo - delete nodes

var assert = require("assert");

var Node = function (val) {
  this.value = val;
  this.left = null;
  this.right = null;
  this.parent = null;
}

Node.prototype.newRight = function(newTarget) {
  this.right = new Node(newTarget);
  this.right.parent = this;
};

Node.prototype.newLeft = function(newTarget) {
  this.left = new Node(newTarget);
  this.left.parent = this;
};

Node.prototype.removeChild = function(child) {
  if (this.left === child) {
    this.left = null;
  } else if (this.right === child) {
    this.right = null;
  } else {
    return false; //the kid is not my son
  }
  return true;
};

Node.prototype.replaceLeftChild = function(child) {
  if (typeof child === typeof this) {
    this.left = child;
    return true;
  } else {
    return false;
  }
};

Node.prototype.replaceRightChild = function(child) {
  if (typeof child === typeof this) {
    this.right = child;
    return true;
  } else {
    return false;
  }
};

Node.prototype.replaceMe = function(child) {
  if (typeof child === typeof this) {
    this.value = child.value;
    this.left = child.left;
    this.right = child.right;
    return true;
  } else {
    return false;
  }
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

Node.prototype.insertNode = function(node) {
  if (typeof node === typeof this) {
    if (node.value < this.value) {
      if (this.left == null) {
        this.left = node;
        return true;
      } else {
        return this.left.insertNode(node);
      }
    } else {
      if (this.right == null) {
        this.right = node;
        return true;
      } else {
        return this.right.insertNode(node);
      }
    }
  } else {
    return false;
  }
}

//destructive remove return true if successful
Node.prototype.remove = function(searchValue) {
  if (this.value === searchValue) {
    if (this.left == null && this.right == null) {
      this.parent.removeChild(this); 
      return true;
    } else if (this.left != null && this.right == null) {
      this.replaceMe(this.left)
      return true;
    } else if (this.left == null && this.right != null) {
      this.replaceMe(this.right)
      return true;
    } else {
      //pick the new root by furthest away from current root
      if ((this.value - this.left.value) > (this.right.value - this.value)) {
        //if new root is left, put right child as right child of my right child
        var orphan = this.right;
        this.replaceMe(this.left);
        this.insertNode(orphan);
        return true;
      } else {
        //if new root is right, put left child as left child of my left child
        var orphan = this.left;
        this.replaceMe(this.right);
        this.insertNode(orphan);
        return true;
      }  
    }
  } else {
    if (searchValue < this.value) {
      return this.left == null ? false : this.left.remove(searchValue);
    } else {
      return this.right == null ? false : this.right.remove(searchValue);
    }
  }
}

var traverse = function(node) {
  if (node === null) {
    return ""
  } else {
    returnMe = traverse(node.left) + " " + node.value.toString() + " " + traverse(node.right);
    return returnMe.trim();
  }
}


var testNode = new Node(2);
assert(testNode.value === 2, "Node constructor didn't work");
assert(traverse(testNode) == "2", "traverse didn't even return root");
testNode.newLeft(1);
assert(testNode.left.value === 1, "Node newLeft didn't work");
assert(traverse(testNode) == "1 2", "traverse didn't return 1 2");
testNode.newRight(3);
assert(testNode.right.value === 3, "Node newRight didn't work");
assert(traverse(testNode) == "1 2 3", "traverse didn't return 1 2 3");
testNode.right.newRight(4);
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

var testRemove = new Node(3);
testRemove.insert(2);
testRemove.insert(4);
var child = testRemove.search(2);
assert(testRemove.removeChild(child), "failed to remove child 2 from testRemove tree");
assert(!testRemove.has(2), "removeChild 2 failed has test on testRemove");
assert(traverse(testRemove) == "3 4", "removeChild 2 failed traverse test on testRemove");
testRemove.insert(2);
testRemove.insert(1);
testRemove.insert(5);
assert(testRemove.remove(3), "testRemove remove 3 failed");
assert(!testRemove.has(3), "testRemove remove 3 failed has test");
assert(traverse(testRemove) == "1 2 4 5", "testRemove remove 3 failed traverse test.");

assert(!testNode.remove(10), "remove did not return false on missing value 10");
assert(testNode.remove(1), "remove 1 failed");
assert(!testNode.has(1), "remove 1 failed has check");
assert(testNode.search(1) == null, "remove 1 failed search check");
assert(traverse(testNode) == "2 3 4 5", "traverse didn't return 2 3 4 5 after the remove(1)");

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

