// //__proto__
// // console.log(Object.getPrototypeOf(1)===Number.prototype);
//
// function Cat(name, color) {
//   this.name = name;
//   this.color = color;
// }
// Cat.prototype.voice = function (){
//   console.log("Cat")
// }
// const cat=new Cat("kit","black")
// cat.__proto__.voice=()=>console.log("Cat12")
// cat.voice()
// const newCat=new Cat("kit","black")
// newCat.voice()
// console.log(Cat.prototype===newCat.constructor.prototype);

//=========================
function Person(){
  Person.prototype.legs=2
  Person.prototype.arms=2
}
const elena=new Person();
elena.name="Elena"
console.log(elena)