function bubbleSort(arr) {
    const {length} = arr;
    console.log(arr);
    for (let j = 0; j < length; j++) {
        for (let i = 0; i < length - 1 - j; i++) {
            const i1 = arr[i];
            const i2 = arr[i + 1];
            if (i1 > i2) {
                arr[i] = i2;
                arr[i + 1] = i1;
            }
        }
    }
}

const arr = [5, 4, 3, 2, 1, 6, 8, 0, 9, 3];
bubbleSort(arr);
