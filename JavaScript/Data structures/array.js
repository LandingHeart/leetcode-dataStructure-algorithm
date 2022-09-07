// array

// remove at index

Array.prototype.splice = function (start, deleteCount, ...items) {
  const data = this;
  let resArr = [];
  let stop = data.length;
  console.log("protop ", start, deleteCount, items);
  function copy(source, self) {
    for (let index = 0; index < source.length; index++) {
      self[index] = source[index];
    }
    self.length = source.length;
  }
  if (start < 0) {
    start = start + data.length;
  }
  if (deleteCount) {
    stop = start + deleteCount;
    if (deleteCount < 0) {
      stop = 0;
    }
  }
  for (let i = start; i < stop; i++) {
    const ele = data[i];
    resArr.push(ele);
  }
  if (deleteCount && items.length <= 0) {
    let deleteArr = [];

    for (let i = 0; i < data.length; i++) {
      let ele = data[i];
      if (i === start) {
        i = stop - 1;
      } else {
        deleteArr.push(ele);
      }
    }
    copy(deleteArr, this);
  }
  if (items > 0) {
    let gatherArr = [];
    for (let i = 0; i < data.length; i++) {
      let ele = data[i];
      if (i === start) {
        gatherArr = [...gatherArr, ...items];
        i = stop - 1;
      } else {
        gatherArr.push(ele);
      }
    }
    copy(gatherArr, this);
  }
  return resArr;
};

Array.prototype.slice = function (start, end) {
  // we set the array 'this' to data.
  const data = this;

  // our stop index, for now we set it to stop at the last index of the data array
  var stop = data.length - 1;

  // we collect the sliced elements here
  var resultArr = [];

  // if no argument is passed in, we return an emoty array
  if (start === undefined) {
    return resultArr;
  }

  // if the start index is negative, we convert it to its positive equivalence.
  if (start < 0) start = start + data.length;

  // if the end index is defined and not negative, we set the stop index to be the end index, decreasing it by one. Remember, slice stops at index short of the end index.
  if (end !== undefined && end > 0) {
    stop = end - 1;
  }

  // we gather the elements from the start index to the stop index to the 'resultArr' array.
  for (var index = start; index <= stop; index++) {
    var element = data[index];
    resultArr.push(element);
  }

  // we return the 'resultArr' array.
  return resultArr;
};
const arr = [56, 66, 99, 44];
const spliceArr = arr.splice(1, 2, 0, 1);

const log = () => {};

log()(arr);
console.log("slice ", slice);
