// O(1) Константная зависимость
// O(n) Линейная зависимость
//O(log n) Логарифмическая сложность
//O(n log n)
// O(n^2) Квадратичная сложность
// O(n^3) Кубическая сложность
// O(2^n) Экспоненциальная сложность
// O(n!) Факториальная  сложность
//O(2n)


// O(1) Константная зависимость
function getLastElement(arr) {
  return arr[arr.length - 1];
}


// O(n) Линейная зависимость
function getSumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

//O(log n) Логарифмическая сложность

let search = function (nums, target) {
  if (target === null || target === undefined) return null;
  debugger
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    mid = Math.round((right - left) / 2) + left;
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return null;
};


search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7);

// O(n^2) Квадратичная сложность
function getMultiplyList(n) {
  for (let i = 1; i < n; i++) {
    for (let j = 0; j < n; j++) {
      console.log(`${i} * ${j}=${i * j}`);
    }
  }
}


// O(2^n) Экспоненциальная сложность
function getFib(n) {
  if (n < 2) {
    return n;
  }
  return getFib(n - 1) + getFib(n - 2);
}


//O(2n)
function calcArray(arr) {
  let sum = 0;
  let mul = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    mul *= arr[i];
  }
  return [sum, mul];
}

//O(n+n^2)
function calculate(arr) {
  arr.forEach(num => console.log(num));
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      arr[i] = arr[i] + arr[j];
    }
  }
  return arr
}
