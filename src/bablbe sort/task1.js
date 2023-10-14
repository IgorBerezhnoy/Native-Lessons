const babbleSort = (arrOfObj) => {
    console.log(arrOfObj);

    for (let j = 0; j < arrOfObj.length; j++) {
        for (let i = 0; i < arrOfObj.length - 1 - j; i++) {
            if (arrOfObj[i].age > arrOfObj[i + 1].age) {
                let firstObj = arrOfObj[i];
                let secondObj = arrOfObj[i + 1];
                arrOfObj[i] = secondObj;
                arrOfObj[i + 1] = firstObj;
            }
        }
    }
    console.log(arrOfObj);
};
babbleSort([{age: 10}, {age: 15}, {age: 45}, {age: 21}, {age: 8}, {age: 7}]);