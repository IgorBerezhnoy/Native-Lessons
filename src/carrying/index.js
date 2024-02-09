// function sum(a, b, c) {
//   return a + b + c;
// }
//
// function multi(a, b, c) {
//   return a * b * c;
// }
//
// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     }
//     return curried.bind(this, ...args);
//   };
// }
//
// const curriedSum = curry(sum);
// console.log(curriedSum(24, 3, 4));
// console.log(curriedSum(24)(3)(4));
// console.log(curriedSum(2)(3)(4));

///
// function mul(a, b, c) {
//   return a * b * c;
// };

// function curry(fn) {
//   return function curried(...args) {
//     if (args.length >= fn.length) {
//       return fn.apply(this, args);
//     }
//     return curried.bind(this, ...args);
//   };
// }
// function curry(callBack) {
//   return function curried (...arg) {
//     if (arg.length >= callBack.length) {
//       return callBack.apply(this, arg)
//     }
//     return curried.bind(this,...arg)
//   };
// }
// const mulCurry=curry(mul)
//
// console.log(mulCurry(2, 4, 5));
// console.log(mulCurry(2,4)(5));


const a = (...args) => {
  if (args.length <= 0) {
    return null;
  }
  return args.reduce((a, b) => a + b, 0);
};
console.log(a(1, 2));
console.log(a(1, 2, 4));
console.log(a(1, 2, 4, 545));
