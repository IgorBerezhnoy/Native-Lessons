//let
let a = 'Value a';
let b = 'Value b';
{
  b = 'Value c';
  let a = 'Value d';
}
console.log(a, b)


// let obj=Object.freeze({
//   a:1,
// })
// // delete obj.a
// // obj.a=10
// console.log(obj)