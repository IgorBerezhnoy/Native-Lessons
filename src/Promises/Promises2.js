let axios = {
    get() {
         let pr= new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({
                    g: 2,
                    g2: 4,
                    message: 'Toto'
                });
                console.log(pr);
            }, 3000);
        });
        return pr;
    }
};
axios.get()
    .then((data) => {
        return data.message;
    })
    .then((message) => console.log(message))
    .then(() => console.log(2))
    .catch((data) => console.error(data));

// let pr = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve()
//        console.log(pr);
//     },3000);
//
// });
// console.log(pr);