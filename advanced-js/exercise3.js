// change everything below to the newer Javascript!

// let + const
let a = 'test';
const b = true;
const c = 789;
a = 'test2';


// Destructuring
const person = {
    firstName : "John",
    lastName  : "Doe",
    age       : 50,
    eyeColor  : "blue"
};


const {firstName, lastName, age, eyeColor} = person;



// Object properties
const a = 'test';
const b = true;
const c = 789;

const okObj = {
    a,
    b,
    c
};


// Template strings
const message = `hello ${firstName} have I Met you before? I think we met in ${city} last summer no???`;


// default arguments
// default age to 10;
function isValidAge(age) {
    default: age = 10;
    return age;
}

// --> Write is this way instead, using the arrow function

//isAgeValid is the name of the function
//age is the parameter but we are giving itb a default value of 10
//the value after the arrow function is what we are returning, age
const isAgeValid = (age = 10) => age;

// Symbol
// Create a symbol: "This is my first Symbol"

const sym = Symbol("This is my first SYmbol");

// Arrow functions

const whereAmI = (username, location) => {
    if (username && location) {
        return "I am not lost";
    } else {
        return "I am totally lost!";
    }
}
