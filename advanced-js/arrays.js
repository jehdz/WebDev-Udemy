// Advanced arrays

const array = [1, 2, 10, 16];

const double =[];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('Double: ', double);

//going to work on map, filter, reduce methods


//loop over each element and return a new array
//if we are only returning one thing, we dont need to use the parentheses on 'num'

// const  mapArray = array.map((num) => {
//     return num * 2;
// });
//
// console.log('Map:', mapArray);

const  mapArray = array.map(num => num * 2);

console.log('Mapped:', mapArray);

//use map over foreach whenever I want to loop over and array
//all foreach cares about it to iterate through a collection of elements
//map expects the operation to return an element --> stores the result into another collection
//map creates a new array
//for-each just do a bunch of action, if we want to return a new array we have to create a new array and push it.
//with map we dont modify the original array



//Filter

// const filterArray = array.filter(num => {
//     return num > 5;
// });
//
// console.log('Filter array: ', filterArray)
//

const filterArray = array.filter(num => num > 5);

console.log('Filter array: ', filterArray)

//Reduce

//everytime we iterate, acc + num
// this function would add all of the values in the array. if we feed it a 5,
//it would retunr 34 because 5 + 1 + 2 + 10 + 16 = 34
const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 5)


console.log('Reduce array: ', reduceArray)

