const nums = [1, 3, 4, 5, 4, 44, 55, 6, 7, 2, 3, 45, 5, 6, 6, 634, 2];
const numsNew = [1,3,43,5564,564577,8, 3, 4, 5, 4, 44, 55, 6, 7, 2, 3, 45, 5, 6, 6, 634, 2];
const cars = ['BMW', 'Mercedes', 'Audi'];
const arrBoleans = [true, 0, '', null, undefined, false, true];
console.log(nums[Math.floor(Math.random()*nums.length)])
// let newCars=[{name:"BMW", color:"red"},{name:"Mercedes", color:"green"},{name:"Audi", color:"blue"}]
// let namesCars=newCars.map(el=>el.name)
// console.log(namesCars)
// console.log([... new Set(nums)].filter(el=>numsNew.includes(el)))
// console.log(nums.splice(0,9,"aaaa"))
// console.log(nums)

// console.log(Array.from(new Set(nums)));
// console.log([...new Set(nums)]);
// console.log(arrBoleans.filter(el => el));
// console.log(nums.reduce((acc, item) =>acc+item,0 ))
// let logArr = [];
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
// logArr = arr.every(el => typeof el === 'number');
//
// console.log(logArr);
// console.log(arr);
// function* strGenerator() {
//   yield 'H';
//   yield 'e';
//   yield 'l';
//   yield 'l';
//   yield 'o';
// }
// const str = strGenerator();
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())
// console.log(str.next())


// function* numberGen(n = 10) {
//   for (let i = 0; i < n; i++) {
//     yield i;
//   }
// }
//
// const str = numberGen();
// console.log(str.next());
// for (let i = 0; i <11 ; i++) {
// console.log(str.next());
//
// }

//
// const iterator = {
//   gen(n = 10) {
//     let i = 0;
//     return {
//       next() {
//         if (i < n) {
//           return {value: i++, done: false};
//         } else {
//           return {value: undefined, done: true};
//         }
//       }
//     };
//   }
// };
// let gen = iterator.gen(2);
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());
// console.log(gen.next());


//Iterators
//-----
// let names = ['Bob', 'Alex', 'John'];
// for (let name of names) {
//   console.log(name);
// }

// let generateNumber = {
//   start: 1,
//   end: 1
// };
// generateNumber[Symbol.iterator] = function () {
//   let current = this.start;
//   let last = this.end;
//   return {
//     next() {
//       if (current <= last) {
//         return {value: current++, done: false};
//       } else {
//         return {value: undefined, done: true};
//       }
//     }
//   };
// }