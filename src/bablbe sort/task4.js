const babbleSort = (arrNum) => {
    console.log('start: ', arrNum);
    for (let j = 0; j <2; j++) {
        for (let i = 0; i < arrNum.length; i++) {
            if (arrNum[i]>arrNum[i+1]){
                let first=arrNum[i]
                let second=arrNum[i+1]
                arrNum[i]=second
                arrNum[i+1]=first
            }
        }
    }
    console.log('end: ', arrNum);
    return arrNum[arrNum.length-2]

};
let res= babbleSort([1, 2, 45, 76657, 7, 4, 4, 32, 56, 9]);
console.log(res)