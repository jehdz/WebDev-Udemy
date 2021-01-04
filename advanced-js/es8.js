// //Padding
// .padStart()
// .padEnd()

//Gives strinsg a padding of 10 at the beginning
'Jose'.padStart(10);
//Gives strinsg a padding of 10 at the End
'Jose'.padEnd(10)

//Trailing commas and functions
//
// const fun = (a, b, c, d) => {
//     console.log(a)
// }
//
// fun(1,2,3,4)
//
// //We can also write this in the following format
// //This is claner when we have long list of parameters
// const fun = (a,
//              b,
//              c,
//              d) => {
//     console.log(a);
// }
//
// fun(1,2,3,4)


/////////////////
Object.values
Object.entries
Object.keys //old format

let obj = {
    username0: 'santa',
    username1: 'Rudolf',
    username2: 'Mr. Grinch'
}


//Before
console.log("\nOld way to iterate")
// object.keys(obj); //this would treat it as an array
Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
})

console.log("------------------------")

//Now its easier
console.log("\nNew way to iterate, returns the values:")
Object.values(obj).forEach( value => {
    console.log(value)
})

console.log( '\nNew way to iterate, returns the entries:');
Object.entries(obj).forEach( value => {
    console.log(value)
})

console.log( '\nsort them in a new way');

Object.entries(obj).map(value => {
    return value[1] + value[0].replace('username', '');
});


//big es8 feature
//Async await

