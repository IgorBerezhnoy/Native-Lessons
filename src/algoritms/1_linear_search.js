const array = [1, 4, 5, 8, 5, 1, 2, 7, 5, 2, 11];
let count = 0;

function linerSearch(array, element) {
  for (let i = 0; i < array.length; i++) {
    count++;
    if (array[i] === element) {
      return i;
    }
  }
  return null;
}

console.log(linerSearch(array, 5),{count});