// let map = new Map();
// map.set('str', 'string')
//   .set(1, 'number')
//   .set(true, 'boolean');

// let map = new Map([['str', 'string'], [1, 'number'], [true, 'boolean']]);
// console.log(map);

//--- set
let jack = {
  name: 'Jack'
};
let max = {
  name: 'Max'
};
let leo = {
  name: 'Leo'
}
let users = new Set();
users.add(jack).add(max).add(leo).add(leo).add(leo).add(3)
console.log(users);