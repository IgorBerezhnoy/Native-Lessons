const babbleSort = (arrString) => {
    console.log("start: ",arrString);
    for (let j = 0; j < arrString.length; j++) {
        for (let i = 0; i < arrString.length - 1 - j; i++) {
            if (arrString[i].length > arrString[i + 1].length) {
                let firstStr=arrString[i]
                let secondStr=arrString[i+1]
                arrString[i]=secondStr
                arrString[i+1]=firstStr
            }
        }
    }
    console.log("end: ",arrString);

};
babbleSort(['qqqq', 'wwww', 'e', 'Rrr', 'vvvvvvvvvvvv', 'o', 'dssdf', '']);