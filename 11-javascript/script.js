// function sayHello(){
//     console.log("Hello")
// }
//
// sayHello();
//
//
// // we assign a function to a variable
// var sayBye = function (){
//     console.log("Bye");
// }
//
// sayBye();
//
// function multiply(a, b){
//      return a * b;
// }


// Parameters vs Arguments

//Parameters are what is inside a funtion
//for example, a and b are parameters in the multiply function
//argumnets would be multiply(4,5), the 4 and 5 are argumnets


// var list = ["tiger", "cat", "bear", "snake"];
// console.log(list)
//.shift moves the first elemnt of the array,
//.pop removes the last element in the array
//.push adds an element to the end of the array
//.concat adds more elements to the array. You can add more than one elemnt in the array with this method
//.sort sorts the array, but only the original. if we concat elemnts to the array, that wont get sorted
//we have to assign it to array variable in order for it to work
//we can achieve this by assigning the old array variable to a new array variable
//w3c has a list of a bunch of array methods
//
//
// var user = {
//     name: "Jose",
//     age:21,
//     hobby: "Programming",
//     isMarried: false,
//     spells: ["abrakadabra", "shazam", "boo"],
//     shout: function () {
//         console.log("AHHHHHHH");
//     }
// };
//
//
// var list = [
//     {
//         username: "andy",
//         password: "secret",
//     },
//     {
//         username: "bob",
//         password: "hello123"
//     }
// ]
//
//
//


//How can we grab properties from an object
//call on the object variable name followed by a . followed by the elemnt you want to grab

//How can we add to the existing object?
// We can achieve this by
//user.favFood = "${favorite food}"
//where favFood can be changed to anything we want to assign the element to

//why isnt an array a javascript type?
//an array is more organized
//datastructures help us organize stuff better.
//Object is better at containg user information
//If you make a game where you have a wizard, youre able to control is more freely

//we can have an array inside of an object



//function declaration

// function newFunction() {
//
// };
//
//
// //funtion expression
//
// var newFunction = function() {
//
// };

//expression
//something that returns a value
// 1 + 3;
// var a = 2;
// return true;
//
// //calling or invoking a function
// alert("");
// newFunction(param1, param2);
//
// //assign a variable
// var a = true;
//
//
// //function vs method
//
// function thisIsAFunction(){
//
// };
//
// var obj = {
//     thisIsAMethod: function (){
//
//     }
// }
//
// // How do we access a funtion?
//
// thisIsAFunction();
//
//
// //how do we access a method? with a dot
//
// obj.thisIsAMethod = function;
//
//

// var todos = [
//     "clean room",
//     "brush teeth",
//     "exercise",
//     "study js",
//     "eat healthy"
// ];
//
// //for loop
//
// // for (var i = 0; i < todos.length; i++) {
// //
// //     console.log(todos[i] + "!")
// //
// // }
//
// //for each funtion
// // todos.forEach(function(todo, i){
// //     console.log(todo, i)
// // })
//
// // or we can also do this
//
// function logTodos(todo, i){
//     console.log(todo, i);
// }
//
// todos.forEach(logTodos);
//
