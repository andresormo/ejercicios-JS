const runTimeOut = async() => {
    // const promise = new Promise((resolve) =>{
    //     setTimeout(function () {
    //                 resolve(console.log('Resolved'));
    //             }, 2000);
    // })
    // const resolve = await promise
    // return resolve
    const promise = await new Promise((resolve) => {
        setTimeout(async function () {
            resolve();
        }, 2000);
    })

    .then(async() => {console.log('Time out!')})
};

runTimeOut();