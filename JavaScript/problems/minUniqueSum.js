// curr

let arr = [1, 2, 2, 2, 2, 3, 4, 5, 5, 5];

function minUnique(arr) {
  let sum = 0;
  let map = new Map();
  // iterate arr if prev is greater add to sum
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], 1);
    } else {
      map.set(arr[i], map.get(arr[i]) + 1);
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (map.get(arr[i]) === 1) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(minUnique(arr));
