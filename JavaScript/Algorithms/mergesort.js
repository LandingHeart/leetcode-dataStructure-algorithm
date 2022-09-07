// Split the given list into two halves (roughly equal halves in case of a list with an odd number of elements).
// Continue dividing the subarrays in the same manner until you are left with only single element arrays.
// Starting with the single element arrays, merge the subarrays so that each merged subarray is sorted.
// Repeat step 3 unit with end up with a single sorted array.

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor(head = null) {
    this.head = head;
    this.size = 0;
  }
}

function insert(val) {
  let node = new ListNode(val);
  let curr;

  if (this.head == null) {
    this.head = node;
  } else {
    curr = this.head;

    while (curr.next) {
      curr = curr.next;
    }
    curr.next = node;
  }
  this.size++;
}

function log() {
  let curr = this.head;

  while (curr !== null) {
    console.log(curr.val);
    curr = curr.next;
  }
}

let newNode = new ListNode(0);
insert(4);
insert(2);
insert(7);
insert(34);
insert(12);
insert(1);

log();

////////////
function merge(left, right) {
  let arr = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  return [...arr, ...left, ...right];
}

function mergeSort(array) {
  const mid = array.length / 2;

  if (array.length < 2) {
    return array;
  }
  const left = array.splice(0, mid);
  return merge(mergeSort(left), mergeSort(array));
}
