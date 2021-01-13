//new feature in js as in es6

//promises are everywhere

//where they are
//how the work

//a promise is an object that may produce a single value sometime in the future
//either a result value, or a reason that is not solved(rejected)

//may be one of three possible states
//1. fullfilled
//2. rejected
//3. pending

//what did we have before promises?
//callback functions -- when something is done execute this piece of code
//

const promise = new Promise((resolve, reject) => {
    if(true){
        resolve('Stuff worked');
    } else {
        reject('error, it broke');
    }
})


const promise2 = new Promise((resolve, reject) => {
    setTimeOut(resolve, 100, 'HIII')
})

const promise3 = new Promise((resolve, reject) => {
    setTimeOut(resolve, 1000, 'POOKIE')
})

const promise4 = new Promise((resolve, reject) => {
    setTimeOut(resolve, 5000, 'Is it me you are looking for?')
})


//these promises are going to be logged into the console 5 seconds after because
//we instructed promise4 to delay 5 seconds
//Promise.All waits till it has all the promise before doing its task
Promise.all([promise1, promise2, promise3, promise4])
    .then(values =>{
        console.log(values);
    })

promise
    .then(result => result + '!')
    .then(result2 => result2 + '?')
    .catch(() => console.log('Error!'))
    .then(result3 => {
        console.log(result3 + '!');
    })


//going to return 'Stuff worked!?!'
//catch is going to make sure to catch any error that is being thrown


//promises are great for async functions


////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
//Real life promise application 














