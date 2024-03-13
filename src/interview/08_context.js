//Context

// const preson = {
//   surname: 'Stark',
//   knows: function (what, name) {
//     console.log(`you know ${what}, ${name} ${this.surname} `);
//   }
// };
// const jonh = {surname: 'Snow'};
// preson.knows('evrything', 'Bran');
// preson.knows.call(jonh, 'nothing', 'John');
// preson.knows.apply(jonh, ['nothing', 'John']);
// preson.knows.bind(jonh, 'nothing', 'John')();


// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const elena=new Person('Elena', 25);
// console.log(elena );

//
// function logThis() {
//   console.log(this);
// }
// logThis()

//
// const animal = {
//   logs: 4,
//   logThis: function () {
//     console.log(this);
//   }
// };
// animal.logThis.call({logs: 8});
// function Cat(color){
//   this.color = color;
//   this.meow = function(){
//     console.log(this.color);
//   }
// }