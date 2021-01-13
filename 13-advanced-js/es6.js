// let + const

const  player = 'bobby'
let experience = 100;
let wizardLevel = false;

if (experience > 90){
    let wizardLevel = true;
}


//constnats are used when we know we are not going to chnage the value
// WE should use const for functions

const a = function (){
    console.log('a');
}

// const obj = {
//     player:'bobby',
//     experience: 100,
//     wizardsLevel: false
// }

// Destructuring

const obj = {
    player:'bobby',
    experience: 100,
    wizardsLevel: false
}


const player = obj.player
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

//intead of doing thise, we can write it this way instead


//Player and experience from the object
//we select the p[roperties we want from the object

const {player, experience} = obj;

let {wizardLevel} = obj;

//This way we acan access they properties anywhere in out program

//Object properties

const a = "Jose";
const b = false;
const c {};

//If the property and the value are the same, we can just declare it how its shown below
//Very useful in react

const obj2 = {
    a,
    b,
    c
}

//Template strings

const name = "sally";
const age = 34;
const pet = "horse"

// const greeting = "hello" + name + "ypu seem to be doing good" + greeting

const greetingBest = `Hello ${name} ypu seem to be ${age - 10}. What a lovely ${pet} you have`;


//Default arguments

function greet(name='', age=30, pet='bird'){
    `Hello ${name} you seem to be ${age - 10}. What a lovely ${pet} you have`;
}

//Symbol
let  sym1 = Symbol();
let  sym2 = Symbol('foo');
let  sym3 = Symbol('foo');

//It creates unique identifiers

//Arrow functions

function add(a,b){
    retune a + b;
}


const add2 = (a, b) => a + b;






















