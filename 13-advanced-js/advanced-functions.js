const first = () => {
    const greet = 'hi';
    const second = () => {
        alert(greet);
    }
    return second;
}


const nuwFunc = first();
newFunction();


//Closures - a function ran, the function executed, It's never going to execute again
//but it is going to remember that there are references to those variables

//Currying - The process of converting a function that takes multiple arguments
//into a function that takes them one at a time

//Why is this useful? - Now its more extensible

const multiply = (a,b) => a * b;

const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3)(4);
// we can create funtions that have specific jobs

const multiplyBy5 = curriedMultiply(5);
//multiplyBy5(5) = 25
//multiplyBy5(10) = 50
//multiplyBy5(20) = 100


//Compose - The act of putting two function together to form a 3rd function
// where the output of one function is the input of the other

const compose = (f, g) => (a) => f(g(a));

const sum = (number) => number + 1;

compose(sum, sum)(5);

//Avoiding side effects and functional purity








