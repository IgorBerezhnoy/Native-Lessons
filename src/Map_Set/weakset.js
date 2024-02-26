const users = [
  {name: 'Elena'},
  {name: 'Alex'},
  {name: 'Irina'},
];
const visits = new WeakSet();
visits.add(users[0]).add(users[1]).add(users[2]);
console.log(visits.has(users[0]));
users[0] = null;
console.log(visits.has(users[0]));
