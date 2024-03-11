const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11,1,2,3,4,5,87,8,9,0,432,35,53,11, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11,1,2,3,4,5,87,8,9,0,432,35,53,1];


let count = 0;

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i; j++) {
      count++;
      if (array[j] > array[j + 1]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array
}

console.log(bubbleSort(array), count)