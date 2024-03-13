// Immediately Invoked Function Expression

let result = [];

for (var i = 0; i < 5; i++) {
  (function (i) {
    result.push(function () {
      console.log(i);
    });
  })(i);
}
result[0]();
result[1]();
result[2]();
result[3]();
result[4]();
