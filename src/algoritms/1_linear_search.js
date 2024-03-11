const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linearSearch(array, value) {
  count = 0;
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch(array,5),count)
console.log(linearSearch(array,11),count)
