const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
let count = 0;

function binarySearch(array, value) {
  count = 0;

  let left = 0,
    right = array.length,
    middle,
    found = false,
    result = -1;
  while (found === false && left <= right) {
    count++;
    middle = Math.floor((left + right) / 2);
    if (array[middle] === value) {
      found = true;
      result = middle;
    } else if (array[middle] > value) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }
  return result;
}

function recursiveBinarySearch(array, value, left, right) {
  debugger
  count++;
  let middle = Math.floor((left + right ) / 2);
  if (value === array[middle]) {
    return middle;
  } else if (value < array[middle]) {
    return recursiveBinarySearch(array, value, left, middle - 1);
  } else {
    return recursiveBinarySearch(array, value, middle + 1, right);
  }
}


console.log(binarySearch(array, 5), count);
console.log(binarySearch(array, 1), count);
console.log(binarySearch(array, 15), count);
console.log(binarySearch(array, 8), count);
count = 0;
console.log(recursiveBinarySearch(array, 5, 0, array.length), count);
count = 0;
console.log(recursiveBinarySearch(array, 1, 0, array.length), count);
count = 0;
console.log(recursiveBinarySearch(array, 15, 0, array.length), count);
count = 0;
console.log(recursiveBinarySearch(array, 8, 0, array.length), count);