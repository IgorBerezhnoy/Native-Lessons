const item = {
  title: 'Phone',
  logTitle() {
    setTimeout(() => console.log(this.title), 1000);
  }
};
item.logTitle();
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