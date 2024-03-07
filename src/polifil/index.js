



///////////Array
// Array.prototype.customForEach = function (cbFunction, thisArg = undefined) {
//   if (typeof cbFunction !== 'function') {
//     throw new Error(``);
//   }
//   for (let i = 0; i < this.length; i++) {
//     cbFunction.call(thisArg, this[i], i, this);
//   }
// };
// Array.prototype.customMap = function (cbFunction, thisArg = undefined) {
//   if (typeof cbFunction !== 'function') {
//     throw new Error(``);
//   }
//   const newArr = [];
//   for (let i = 0; i < this.length; i++) {
//     newArr.push(cbFunction.call(thisArg, this[i], i, this));
//   }
//   return newArr;
// };
// let arr = [1, 2, 3, 4, 5].customForEach(el => console.log(el));
// let arrMap = [1, 2, 3, 4, 5].customMap(el =>el+2);
// console.log(arrMap);