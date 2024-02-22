const person = Object.create({}, {
  name: {
    value: 'Dimych',
    enumerable: true,
    writable: true,
    configurable: true

  },
  birthYear: {
    value: 1993,
    enumerable: false,
    writable: false,
    configurable: false
  },
  age: {
    // value: new Date().getFullYear() - 1993,
    enumerable: true,
    get() {
      return new Date().getFullYear() - this.birthYear;
    },
    set() {
    },
  }, greetings() {
    console.log('hello');
  }

});

// const person = {
//   name: 'Dimych',
//   age: 32,
//   isMarried: true
// };
// delete person.name;
for (let key in person) {
  console.log('ker', key, person[key]);
}
console.log(person);
// let obj1 = {
//   name: 'Demych',
// };
// let newObj = Object.assign({}, obj1);
//
// console.log(Object.is(newObj, obj1));


// const userInfo = {
//   name: 'Dimych',
//   age: 32,
// };


// const person = {
//   name: 'Dimych',
//   age: 32,
//   isMarried: true
// };
// const person2 = {
//   name: 'Dimych',
//   age: 32,
//   isMarried: true
// };
// console.log(Object.is(person, person2));


