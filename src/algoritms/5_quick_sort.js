const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11,1,2,3,4,5,87,8,9,0,432,35,53,11, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11,1,2,3,4,5,87,8,9,0,432,35,53,1];

let count = 0;

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }
  let pivotIndex = Math.floor(array.length / 2);
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];
  for (let i = 0; i < array.length; i++) {
    count++;
    if (i === pivotIndex) {
      continue;
    }
    if (array[i] < pivot) {
      less.push(array[i]);
    } else {
      greater.push(array[i]);
    }

  }
  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(array), count);