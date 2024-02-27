function myFunction() {
  console.log(this);
}

const item = {
  title: 'Phone',
};
myFunction.call(item)

//   const item={
//   title:"Phone",
//   fullPrice: 100,
//   calculatePrice(discount=0) {
//     console.log(this.fullPrice-discount/100*this.fullPrice);
//   }
// }
// item.calculatePrice(10);
// item.calculatePrice(20);
// // function myFunction() {
//   console.log(this);
// }
//
// const item = {
//   myFunction,
//   title: 'Phone'
// };
// item.myFunction();
// exports.default = {
//   title: 'Phone'
// };
//
// console.log(this);

// const sayHello = () => console.log(`Hi,I'm ${this.name}`);
// const person = {
//   name: 'Ivan',
//   sayHello: function () {
//     sayHello.call(this);
//   }, introduceMyself() {
//     console.log(`Hi,I'm ${this.name}`);
//   }, introduceMyself2: () => {
//     console.log(`Hi,I'm ${this.name}`);
//   },
// };
// const anotherPerson = {name: 'Igor', ago: 23};
// sayHello(); //1...
// person.sayHello(); //2...
// person.introduceMyself(); //3...
// person.introduceMyself2(); //4...
// person.introduceMyself.apply(anotherPerson);//5...
// person.introduceMyself2.bind(anotherPerson)();//6...

// function hello() {
//   console.log('Hello', this);
// }
//
// const lena = {
//   name: 'Elena', age: 23
// };
// const person = {
//   name: 'Vladilen', age: 25, sayHello: hello, sayHelloWindow: hello.bind(this), logInfo: function (job, phone) {
//     console.group(`${this.name} info: `);
//     console.log(`Name is ${this.name}`);
//     console.log(`Age is ${this.age}`);
//     console.log(`Job is ${job}`);
//     console.log(`Phone is ${phone}`);
//     console.groupEnd();
//   }
// };
// person.logInfo.apply(lena, ['Frontend', '8-800-555-35-35']);
//
// const array = [1, 2, 3, 4, 5];
// Array.prototype.multiple = function (num) {
//   return this.map(el => el * num);
// };
//
// console.log(array.multiple(2));
// person.sayHello();
// person.sayHelloWindow();

// const item = {
//   title: 'Phone',
//   logTitle() {
//     setTimeout(() => console.log(this.title), 1000);
//   }
// };
// item.logTitle();
//
// const obj = {
//   lastName: 'Ivanov',
//   firstNames: ['Peter', 'Ivan'],
//   logFullName1: function () {
//     this.firstNames.forEach(function (name) {
//       console.log(`${this.lastName} ${name}`);
//     },this);
//   },
//   logFullName2: function () {
//     this.firstNames.forEach((name) => {
//       console.log(`${this.lastName} ${name}`);
//     });
//   }
// };
// obj.logFullName1()
// obj.logFullName2()
//
//
// obj.getThis1();
// obj.getThis2();
// const obj = {
//   getThis1: function () {
//     console.log(this);
//   }, getThis2: () => {
//     console.log(this);
//   }
// };
// obj.getThis1();
// obj.getThis2();
//
//
// function CreatItem(title, price) {
//   this.title = title;
//   this.price = price;
//   console.log(this);
// }
//
// const item = new CreatItem('Phone', 500);
// console.log(item);
//
// const item = {
//   title: 'Phone',
//   price: 500,
//   calculatePrice(discountPercent = 0) {
//     console.log(this.price - discountPercent / 100 * this.price);
//   }
// };
// item.calculatePrice(20);
// item.calculatePrice();
//
// 'use strict';
//
// function calculateDiscount(age) {
//   if (age > 60) {
//     console.log(this.price / 2);
//   } else {
//     console.log(this.price);
//   }
// }
//
// const calculateDiscount61 = calculateDiscount.bind(item, 61);
// calculateDiscount.call(item, 61);
// calculateDiscount.apply(item, [60, 61, 63]);
//
// calculateDiscount61()
// function CreatItem() {
//   console.log(this);
// }
//
// CreatItem.call(item);
// CreatItem.apply(item);
//
//
// exports.default = {
//   title: 'Phone'
// };
// console.log(this);