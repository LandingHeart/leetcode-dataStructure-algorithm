function Node(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.show = show;
}

function BST() {
  this.root = null;
  this.insert = insert;
  this.inOrder = inOrder;
}

function insert(val) {
  var n = new Node(val, null, null);
  if (this.root == null) {
    this.root = n;
  } else {
    var current = this.root;
    var parent;
    while (true) {
      parent = current;
      if (val < current.val) {
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

// iterative
function preorderIterative(root) {
  if (root == null) {
    return;
  }
  let stack = new Array();
  let res = [];
  stack.push(root);

  console.log("root ", root.val);
  while (stack.length > 0) {
    let node = stack.pop();
    // res.push(node.val);
    console.log(node.val);
    if (node.right !== null) {
      stack.push(node.right);
    }
    if (node.left !== null) {
      stack.push(node.left);
    }
  }
}
function inorderIterative(root) {
  if (root == null) {
    return;
  }

  let stack = [];
  let curr = root;

  while (stack.length > 0 || curr != null) {
    if (curr != null) {
      stack.push(curr);
      curr = curr.left;
    } else {
      curr = stack.pop();
      console.log(curr.val);
      curr = curr.right;
    }
  }
}
function postorderIterative(node) {
  let stack = [];
  // Check for empty tree
  if (node == null) return list;
  stack.push(node);
  let prev = null;
  while (stack.length != 0) {
    let current = stack[stack.length - 1];

    if (prev == null || prev.left == current || prev.right == current) {
      if (current.left != null) {
        stack.push(current.left);
      } else if (current.right != null) {
        stack.push(current.right);
      } else {
        stack.pop();
        list.push(current.data);
      }

      /* go up the tree from left node, if the child is right
                push it onto stack otherwise process parent and pop
                stack */
    } else if (current.left == prev) {
      if (current.right != null) {
        stack.push(current.right);
      } else {
        stack.pop();
        list.push(current.data);
      }

      /* go up the tree from right node and after coming back
                from right node process parent and pop stack */
    } else if (current.right == prev) {
      stack.pop();
      list.push(current.data);
    }

    prev = current;
  }

  return list;
}

function levelOrderTraversal(root) {
  let res = [];
  if (!root) {
    return [];
  }
  let queue = [root];
  while (queue.length > 0) {
    let len = queue.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift;
      temp.push(node.val); //left
      if (node.left) queue.push(node.left);
      //right
      if (node.right) queue.push(node.right);
    }
    res.push(temp);
  }
}

function nAryTree() {}
function traverseNaryTree() {}
let nums = new BST();

insert10();
// preorderIterative(nums.root);
// preOrder(nums.root);
// inorderIterative(nums.root);
// let min = getMin(nums.root);
// let count = postOrderCount(nums.root);
// console.log("count ", count);
/* 
  
  1. Set the root node to be the current node.
  2. If the val value in the inserted node is less than the data value in the current node, set the new current node to be the left child of the current node. If the data value in the inserted node is greater than the data value in the current node, skip to step 4.
  3. If the value of the left child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
  4. Set the current node to be the right child of the current node.
  5. If the value of the right child of the current node is null, insert the new node here and exit the loop. Otherwise, skip to the next iteration of the loop.
  */

// Trees (BST, AVL Trees, Red Black Trees, Binary Heaps)

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
  return curr.val;
}

function getMax() {
  var current = this.root;
  while (!(current.right == null)) {
    current = current.right;
  }
  return current.val;
}

function show() {
  return this.val;
}

function removeNode(root, val) {
  let curr = root;
  while (curr.left !== null && curr.right !== null) {
    if (curr.left !== null) {
      curr = curr.left;
      if (curr.val === val) {
        //remove val
      }
    }
    if (curr.right !== null) {
      curr = curr.right;
      if (curr.val === val) {
        //remove val
      }
    }
  }
}

function bfs(root) {
  // queue
  let queue = [root];
  let res = [];
  while (queue.length > 0) {
    let curr = queue.shift();
    console.log(curr.val);
    res.push(curr.val);
    if (curr.left !== null) queue.push(curr.left);
    if (curr.right !== null) queue.push(curr.right);
  }
  return res;
}

console.log(bfs(nums.root));
console.log(dfs(nums.root));

function dfs(root) {
  // stack
  let stack = [root];
  let res = [];

  while (stack.length > 0) {
    let curr = stack.pop();
    console.log(curr.val);
    res.push(curr.val);
    if (curr.left !== null) stack.push(curr.right);
    if (curr.right !== null) stack.push(curr.left);
  }
  return res;
}

function insertBST(val) {
  let curr = this.root;
  let node = new Node(curr, null, null);
  if (curr === null) {
    curr = node;
  } else {
    while (true) {
      let parent;
      parent = curr;

      if (val < curr.val) {
        curr = curr.left;
        if (curr === null) {
          parent.left = node;
          break;
        }
      } else {
        curr = curr.right;
        if (curr === null) {
          parent.right = node;
          break;
        }
      }
    }
  }
}
