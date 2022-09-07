let arr = [
  "Destiny IX",
  "David XI",
  "David XIII",
  "David I",
  "Steven XVI",
  "Mary XV",
  "Steven XL",
];

let map = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

function Sort(arr) {
  let romanMap = {};

  arr.sort((a, b) => {
    let arr1 = a.split(" ");
    let arr2 = b.split(" ");
    let val1 = romanToInt(arr1[1]);
    let val2 = romanToInt(arr2[1]);

    let str1 = arr1[0];
    let str2 = arr2[0];

    if (arr1[0] === arr2[0]) {
      if (val1 > val2) {
        return 1;
      } else {
        return -1;
      }
    } else {
      return ("" + str1).localeCompare(str2);
    }
  });

  return arr;
}
console.log(Sort(arr));

function romanToInt(str) {
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    let currVal = map[str[i]];
    let nextVal = map[str[i + 1]];

    if (nextVal > currVal) {
      sum += nextVal - currVal;
      i++;
    } else {
      sum += currVal;
    }
  }

  return sum;
}
