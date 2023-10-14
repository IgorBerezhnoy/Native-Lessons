const babbleSort = (arr) => {
    console.log(arr);
    for (let j = 0; j < arr.length; j++) {
        for (let i = 0; i < arr.length - 1 - j; i++) {
          if (arr[i]<arr[i+1]){
              let first=arr[i]
              let second=arr[i+1]
              arr[i]=second
              arr[i+1]=first
          }
        }
    }
    console.log(arr);

};
babbleSort([1, 2, 45, 76657, 7, 4, 4, 32, 56, 9]);