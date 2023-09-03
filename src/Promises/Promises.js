function wait(second){
    return new Promise((resolve, reject)=>{
          setTimeout(()=>{
              resolve()
        },second)
    })


}


async function run(){
    await wait(1000)
    console.log(1);
    await wait(2000)
    console.log(2);
    await wait(3000)
    console.log(3);
}

run()