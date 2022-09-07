function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
  this.show = show;
}
function show() {
  return this.data;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert(data) {
  var n = new Node(data, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (data < current.data) {
        current = current.left;
        if (current == null) {
          parent.left = n;
          break;
        }
      } else {
        current = current.right;
        if (current == null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}

function insert10() {
  let num = [23, 45, 16, 37, 3, 99, 22];
  for (let i = 0; i < num.length; i++) {
    nums.insert(num[i]);
  }
}
function inOrder(node) {
  if (!(node === null)) {
    inOrder(node.left);
    console.log(node.show());
    inOrder(node.right);
  }
}
function preOrder(node) {
  if (!(node == null)) {
    console.log(node.show());
    preOrder(node.left);
    preOrder(node.right);
  }
}
function postOrder(node) {
  if (node !== null) {
    postOrder(node.left);
    postOrder(node.right);
    console.log(node.show());
  }
}
function postOrderCount(node) {
  if (node === null) {
    return 0;
  }
  return postOrderCount(node.left) + postOrderCount(node.right) + 1;
}

function getMin(root) {
  console.log("min val");
  let curr = root;
  while (curr.left !== null) {
    curr = curr.left;
  }
  return curr.data;
}
function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.data;
}
function removeNode(root, data) {
  let curr = root;
  while (curr.left !== null && curr.right !== null) {
    if (curr.left !== null) {
      curr = curr.left;
      if (curr.data === data) {
        //remove data
      }
    }
    if (curr.right !== null) {
      curr = curr.right;
      if (curr.data === data) {
        //remove data
      }
    }
  }
}
function check(root) {
  console.log("! root ", typeof !root);
}

// console.log("in order");
// inOrder(nums.root);
// console.log("pre order");
// preOrder(nums.root);
// console.log("post order");
// tree iterative approach

function preorderTraversal(root) {
  if (root == null) {
    return;
  }
  let stack = new Array();
  let res = [];
  stack.push(root);

  console.log("root ", root.data);
  while (stack.length > 0) {
    let node = stack.pop();
    // res.push(node.data);
    console.log(node.data);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
}
let nums = new BST();
insert10();
preorderTraversal(nums.root);

// let min = getMin(nums.root);
// let count = postOrderCount(nums.root);
// console.log("count ", count);
/* 

1. Set the root node to be the current node.
2. If the data value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
3. If the value of the left child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
4. Set the current node to be the right child of the current node.
5. If the value of the right child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
*/

// Trees (BST, AVL Trees, Red Black Trees, Binary Heaps)
