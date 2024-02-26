const obj = {
  name: 'Dimych',
  age: 32,
  job: 'Frontend',
};
const entries = Object.entries(obj);
// console.log(entries);
// console.log(Object.fromEntries(entries));
const map = new Map(entries);

map.set('newField', 42)
  .set(obj, 'test')
  .set(NaN, 'NaN');
// console.log(map);
//---
// for (const [key, value] of map) {
//   console.log(key, value);
// }
///----
// map.forEach((value,key)=>console.log(value,key));
//----
// const array=[...map]
// const array1=Object.fromEntries([...map])
// console.log(array);
// console.log(array1);

///
const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'},
];
const visits = new Map();

users.map((el) => visits.set(el, new Date().getTime() + 1000 * 60 * Math.random()));
console.log(visits);

function lastVisit(user) {
  return visits.get(user);
}
console.log(lastVisit(users[1]));