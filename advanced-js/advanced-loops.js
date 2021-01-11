const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000

}

//normal for loop
for (let i = 0; i < basket.length; i++){
    console.log('for loop: ', basket[i]);
}

console.log('\n') /////////////////////////////////////////

basket.forEach( item => {
    console.log('for each: ', item);
})

console.log('\n') /////////////////////////////////////////

//for of
//we can also iterate over a string
// Iterate - arrays and strings
for (item of basket) {
    console.log('for of: ', item);
}

console.log('\n')


//for in
//we are noy iterating, we are
//enumerating - for objects


for (item in detailedBasket) {
    console.log(item)
}

