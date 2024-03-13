// function sayHelloTo(name){
//   const message="Hello "+name
//   return function (){
//     console.log(message)
//   }
// }
// sayHelloTo("Dimych")()
const fib = [1, 2, 3, 5, 8, 13, 21, 34, 55];
for (var i = 0; i < fib.length; i++) {
  (function (j) {
    setTimeout(function () {
      console.log('fib[i]', fib[j], j);
    });
  })(i);
}