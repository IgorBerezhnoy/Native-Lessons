const arr = [1, 3, 4, 5, 4];
let logArr = [];
// //1)forEach
// arr.forEach((el,i,arr) => console.log(el,i,arr));


// // 2)map
// const arrMap = arr.map(el => {
//   console.log(el);
//   return 1;
// });
// console.log(arrMap);

//  3) reduce
// const arrReduce = arr.reduce((acc, item, index, _arr) => {
//   acc[item] = index;
//   return acc;
// }, {});
// const arrReduce = arr.reduce((acc, item, index, _arr) => {
//   acc.push(index*item)
//   return acc;
// }, []);


// //4) find
// logArr = arr.find(el => el.id === 1);
// logArr.id = 4;
// console.log(arr);
// console.log(logArr);

// //5) findIndex
// logArr = arr.findIndex(el => el.id === 1);
// console.log(logArr);

// //6) filter
// logArr = arr.filter(el => el > 3);

// //7) push
// logArr = arr.push(6);

// //8) unshift
// logArr = arr.unshift(6);

// //9) pop
// logArr = arr.pop();

// //10) shift
// logArr = arr.shift();

// //11) concat
// logArr = arr.concat([1,23,4,4,5,56,6], [7,8,9,0]);

// //12) join
// logArr = arr.join(" + ").split(" + ")
//


// //13) sort
// logArr= arr.map(el=>el).sort((a, b) =>  b-a);

// //14) isArray
// logArr = Array.isArray(arr);

// //15-16) slice/splice
// logArr = arr.slice(2,3);
// logArr = arr.splice(-1,1,7);

// //17-18) indexOf/lastIndexOf
// logArr=arr.indexOf(4)
// logArr=arr.lastIndexOf(4)

// //19) includes
// logArr = arr.includes(60);
//
//
// console.log(logArr);
// console.log(arr);


// //20 revers
// logArr = arr.map(el=>el).reverse();


// //20 every
logArr = arr.every(el => typeof el === 'number');

console.log(logArr);
console.log(arr);