//цепочка промисов
fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then(res=>res.json())
  .then(console.log)
  .catch(console.log)

// async function getTodo() {
//
// }
// Promise.all()

// const family = [
//   {member: 'mother', id: 111, coffee: 'Latte'},
//   {member: 'father', id: 222, coffee: 'Americano'},
//   {member: 'son', id: 333, coffee: 'Cappuccino'},
// ];
//
// const getCoffee = (member) => {
//   const coffeePromise = fetch('http://api.sampleapis.com/coffee/hot');
//   return coffeePromise
//     .then(data => data.json())
//     .then(json => {
//       // console.log('list >>>', json);
//       let coffee = json.find(el => el.title === member.coffee);
//       console.log(member.member, 'member >>>', coffee);
//       return {...member, coffee};
//     });
// };
//
//
// const getFamilyMember = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const member = family.find((item) => item.id === id);
//       member
//         ? resolve(member)
//         : reject(`no member with id ${id}`);
//     }, 1500);
//   });
// };
// getFamilyMember(222)
//   .then(memer => {
//     return getCoffee(memer);
//   }).then(newMember => {
//     const index = family.findIndex((el)=>el.id===newMember.id);
//     if (index) {
//       family[index] = newMember;
//       console.log(family);
//     }
//   }
// ).catch(console.error);
// const coffee = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('coffee is ready');
//   }, 1000);
// })
//   .then(console.log)
//   .catch(console.error);
// console.log('start');
//
// fetch('http://api.sampleapis.com/countries/countries1')
//   .then(res => {
//       return res.json();
//     }
//   ).then(res => {
//   console.log(res);
// }).catch(err=>console.log(err));
// console.log('finished');

// const promise = new Promise((resolve, reject) => {
//   console.log('start');
//   setTimeout(() => {
//     console.log('finish');
//     resolve();
//   }, 1000);
// });
// console.log('start 2');

// async function getTodo() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   return await res.json();
// }
//
// async function getTodo2() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/2');
//   return await res.json();
// }
//
// async function getTodo3() {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/3');
//   return await res.json();
// }
//
// Promise.all([getTodo(), getTodo2(), getTodo3()])
//   .then(res => console.log(res));

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(res => res.json())
//   .then(console.log)
//   .catch(console.error);
//
// const getTodo = async () => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   const json = await res.json();
//   console.log(json);
//   return json;
// };
// let a;
// getTodo().then(res => a = res).then(a=>console.log(a));
// console.log('start');
//
// console.log('start 2');
//
// setTimeout(() => {
//   console.log('setTimeout 1');
// }, 1);
//
//
// setTimeout(() => {
//   console.log('setTimeout 0');
// });
//
// setTimeout(() => {
//   console.log('setTimeout 1000');
// }, 1000);
// console.log('end');