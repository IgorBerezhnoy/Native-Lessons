const factorial = n => {
  if (n === 1) {
    return 1;
  } else {
    n *= factorial(n - 1);
  }
  return n;
};
console.log(factorial(5));


const fibonachi = n => {
  if (n <= 2) {
    return n;
  } else {
   return  fibonachi(n-1) + fibonachi(n-2);
  }
};
console.log(fibonachi(5))