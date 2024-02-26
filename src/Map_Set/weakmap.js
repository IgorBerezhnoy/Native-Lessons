let obj = {name: 'weakmap'};
// const arr = [obj];
// obj = null;
// console.log(arr);
const map = new WeakMap([[obj, 'obj data']]);
//get set delete has

//---


const cache = new WeakMap();

function cacheUser(user) {
  if (!cache.has(user)) {
    cache.set(user, Date.now());
  }
  return cache.get(user);
};
let lena = {name: 'lena'};
let alex = {name: 'alex'};
cacheUser(lena);
cacheUser(alex);
console.log(cache.has(lena));
console.log(cache.get(alex));