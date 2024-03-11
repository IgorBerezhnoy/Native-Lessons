const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11,1,2,3,4,5,87,8,9,0,432,35,53,11, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11,1,2,3,4,5,87,8,9,0,432,35,53,1];
let count = 0;

function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    let indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] < array[indexMin]) {
        indexMin = j;
      }
      count++
    }
    let tmp = array[i];
    array[i] = array[indexMin];
    array[indexMin] = tmp;
  }
  return array
}

console.log(selectionSort(array), count, array.length)