//Object Spread

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

//w the new object spread operator

const { tiger, ...rest } = animals;

// on the console, tiger returns 23
// rest returns lion and monkey propertires

const array = [1,2,3,4,5];
function sum (a,b,c,d,e) {
    return a + b + c + d + e;
}

//we can do sum (...array)
//instead of sum(1,2,3,4,5)

function objectSpread(p1,p2,p3) {
    console.log(p1);
    console.log(p2);
    console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger,lion, rest)