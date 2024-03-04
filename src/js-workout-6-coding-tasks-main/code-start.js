// // 1. Сколько раз каждый элемент встречается в массиве:
// // {kiwi: 3, apple: 2, orange: 1}
//
// const fruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// const countFruits = (fruits) => {
//   const uniqueFruits = [...new Set(fruits)];
//   const count = {};
//   uniqueFruits.forEach(el => {
//     count[el] = fruits.filter(item => el === item).length;
//   });
//   console.log(count);
//   return count;
// };
//
//
// // 2. Создать массив который содержит только уникальные значения
// // ['kiwi', 'apple', 'orange']
//
// const myFruits = ['kiwi', 'apple', 'kiwi', 'orange', 'kiwi', 'apple'];
// const uniqueFruits = [...new Set(myFruits)];
//
//
// // 3. Создать функцию, которая сгруппирует студентов по возрасту.
// // На выходе получить объект, где ключ - возраст,
// // а значение - массив студентов
// // {
// //   '20': [{ name: 'alex', age: 20 }, { name: 'masha', age: 20 }],
// //   '24': [{ name: 'mike', age: 24 }],
// //   '18': [{ name: 'stas', age: 18 }],
// // }
// const students = [
//   {name: 'alex', age: 20},
//   {name: 'mike', age: 24},
//   {name: 'masha', age: 20},
//   {name: 'stas', age: 18},
// ];
// const groupByAge = (students) => {
//   const ages = [...new Set(students.map(student => student.age))];
//   const groups = {};
//   ages.forEach(age => {
//     groups[age] = students.filter(students => students.age === age);
//   });
//   console.log(groups);
//   return groups;
// };
// // 4. Написать функцию, которая принимает два аргумента:
// // массив из уникальных целых чисел и сумму в виде целого числа.
// // Если сумма двух любых чисел массива из аргумента равна числу,
// // которое приходит вторым аргументом, функция должна
// // вернуть новый массив из этих двух чисел в любом порядке.
// // Если решения нет, вернуть пустой массив.
//
// // [-1, 11] или [11, -1] - так как -1 + 11 = 10;
//
// const myNumbers = [3, 5, -4, 8, 11, 1, -1, 6];
// const sum = 11;
// const findSum = (myNumbers, sum) => {
//   for (let i = 0; i < myNumbers.length; i++) {
//     for (let j = i + 1; j < myNumbers.length; j++) {
//       if (myNumbers[i] + myNumbers[j] === sum) {
//         return [myNumbers[i], myNumbers[j]];
//       }
//     }
//   }
//   return [];
// };
// // console.log(findSum(myNumbers, sum));
//
// // 5. Получить единый массив из любимых пицц каждого друга
// // ['cheese', 'pepperoni', 'meat', 'fish']
// const friends = [
//   {name: 'alex', pizzas: ['cheese', 'pepperoni']},
//   {name: 'mike', pizzas: ['salami', 'margarita']},
//   {name: 'stas', pizzas: ['meat', 'margarita']},
//   {name: 'anna', pizzas: ['fish']}
// ];
// const getAllPizzas = (friends) => {
//   const allPizzas = [];
//   friends.map(friend => friend.pizzas).forEach(piza => allPizzas.push(...piza));
//
//   return [...new Set(allPizzas)];
// };
// console.log(getAllPizzas(friends));
//
// // 6. Записать строку (символы строки) в обратном порядке (2 способа)
// // pizza => azzip
// const myStr = 'pizza';
// console.log(myStr.split('').reverse().join(''));
// const foo = (str) => {
//   let resultStr = '';
//   for (let i = str.length-1; i >= 0; i--) {
//     resultStr += str[i];
//   }
//   return resultStr;
// };
// console.log(foo(myStr));
//
//   function sum(n) {
//     console.log(n);
//     return function (a) {
//       return sum(a + n);
//     };
//   }
//
//   sum(5)(2)(3)(4);
//
//   function foo(obj1, obj2) {
//     for (let key in obj2) {
//       if (obj1[key]) {
//         obj1[key] = obj2[key];
//       }
//     }
//     return obj1;
//   }
//
//   let obj1 = {
//     foo: 'foo',
//     bar: 'bar'
//   }, obj2 = {
//     some: 'foo2',
//     bar: 'foo'
//   };
//   console.log(foo(obj1, obj2));
//
//
//
// const arr = [6.1, 4.2, 6.3];
// const groupBy = (arr, callbackFoo) => {
//   const resultObj = {};
//   arr.forEach(el => {
//       const resEl = callbackFoo(el);
//       if (resultObj[resEl]) {
//         resultObj[resEl].push(el);
//       } else {
//         resultObj[resEl] = [el];
//       }
//     }
//   );
//   return resultObj
// };
// console.log(groupBy(arr,Math.floor))

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
//
// console.log('end');
//
// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
// })
//
// promise1.then(res => {
//   console.log(res)
// })
//
// console.log('end');
// //s 1 end 2


// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
//   resolve(2)
//   console.log(3)
// })
//
// promise1.then(res => {
//   console.log(res)
// })
//
// console.log('end');
// //s 1 3 end 2

// console.log('start');
//
// const promise1 = new Promise((resolve, reject) => {
//   console.log(1)
// })
//
// promise1.then(res => {
//   console.log(2)
// })
//
// console.log('end');
//s 1 end
// console.log('start')
//
// const fn = () => (new Promise((resolve, reject) => {
//   console.log(1);
//   resolve('success')
// }))
//
// console.log('middle')
//
// fn().then(res => {
//   console.log(res)
// })
//
// console.log('end')
//s  m 1 e s

// console.log('start');
//
// Promise.resolve(1)
//   .then((res) => {
//     console.log(res);
//   });
//
// Promise.resolve(2)
//   .then((res) => {
//   console.log(res);
// });
//
// console.log('end');
//s e 1 2

// console.log('start')
//
// setTimeout(() => {
//   console.log('setTimeout')
// })
//
// Promise.resolve().then(() => {
//   console.log('resolve')
// })
//
// console.log('end')
// //s e r s

// const promise = new Promise((resolve, reject) => {
//   console.log(1);
//   setTimeout(() => {
//     console.log("timerStart");
//     resolve("success");
//     console.log("timerEnd");
//   }, 0);
//   console.log(2);
// });
//
// promise.then((res) => {
//   console.log(res);
// });
//
// console.log(4);
// 1 2 4 ts t s

// const timer1 = setTimeout(() => {
//   console.log('timer1');
//
//   const promise1 = Promise.resolve().then(() => {
//     console.log('promise1')
//   })
// }, 0)
//
// const timer2 = setTimeout(() => {
//   console.log('timer2')
// }, 0)
//t1 p1 t2

// console.log('start');
//
// const promise1 = Promise.resolve().then(() => {
//   console.log('promise1');
//   const timer2 = setTimeout(() => {
//     console.log('timer2')
//   }, 0)
// });
//
// const timer1 = setTimeout(() => {
//   console.log('timer1')
//   const promise2 = Promise.resolve().then(() => {
//     console.log('promise2')
//   })
// }, 0)

console.log('end');
//s e p1 t1 t2 p2