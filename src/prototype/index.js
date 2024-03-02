let a = {
  text: 'Hello',
  color: 'red',
  show: function () {
    console.log(this.text);
  }
};
let b = {
  fontSize: '24px',
  __proto__: a
};
b.text = 'aa';
let c = {
  fontFamily: 'Verdana',
  __proto__ : b
};

console.log(a);
console.log(b);
console.log(c);


// const person = {
//   name: 'Alex',
//   age: 25,
//   greet: function () {
//     console.log('Greet');
//   }
// };

// const person = new Object({
//   name: 'Alex',
//   age: 25,
//   greet: function () {
//     console.log('Greet');
//   }
// });
// console.log(person);
//
// Object.prototype.sayHi = function () {
//   console.log('Hello');
// };
//
//
// const lena = Object.create(person);
// lena.name="Lena";
// console.log(lena);
// function Auto(brand, price, gas) {
//   this.brand = brand;
//   this.price = price;
//   this.gas = gas;
// }
//
// Auto.prototype.drive = function () {
//   if (this.gas > 20) {
//     this.gas = this.gas - 20;
//     return this.gas;
//   } else {
//     console.log('Без топлива');
//   }
// };
// Auto.prototype.info = function () {
//   return `Марка: ${this.brand}, цена: ${this.price}, топливо: ${this.gas}`
// }
// const bmw = new Auto('BMW', 100, 50);
// const nissan = new Auto('nissan', 70, 80);
// console.log(bmw.info());
// console.log(bmw.drive());
// console.log(bmw.drive());
// console.log(bmw.drive());
// console.log(bmw.info());
// console.log(nissan.info());
