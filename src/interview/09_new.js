function Cat(color, name) {

  this.color = color;
  this.name = name;
  this.meow = function () {
    console.log(this.color);
  };
return {a:'aaaaa'}
}
//
// // const cat = new Cat('black','Tom')
// // cat.meow()
// function myNew(constructor, ...args) {
//   const obj = {};
//   Object.setPrototypeOf(obj, constructor.prototype);
//   return constructor.apply(obj, args);
// }
//
