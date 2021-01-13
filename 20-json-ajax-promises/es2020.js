const promiseOne = new Promise((resolve, reject) =>
    setTimeout(resolve, 3000))
const promiseTwo = new Promise((resolve, reject) =>
    setTimeout(reject, 3000))


//promise.all only resolve if both promises resolve
Promise.all([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(e => console.log('something failed', e))

//with the new es2020 feature
//allSettled doesnt care about solve and reject
//it runs all promises regardless if they get rejected or not

Promise.allSettled([promiseOne, promiseTwo])
    .then(data => console.log(data))
    .catch(e => console.log('something failed', e))