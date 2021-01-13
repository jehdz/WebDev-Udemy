//Reference type
const object1 = { value: 10 }
const object2 = object1
const object3 = { value: 10 }

// object1 === object2 --> true
// object1 === object3 --> false

//reference type is a non primitive type.
//This means that it is created by the programmer

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////
//////////////////////////////////////////////////

//Context
//key word this. it refers top what object it is inside of

// const object4 = {
//     a: function () {
//         console.log(this);
//     }
// }

//Instantiation - make a copy of an object and use the code
//making instance or multiple copies of the object

class Player {
    constructor(name, type) {
        console.log('player', this)
        this.name = name;
        this.type = type;
    }

    introduce(){
        console.log(`Hi i am ${this.name}. I'm a ${this.type}.`)
    }
}

//super is needed to have access to the player class.
//We also need to include extends

class Wizard extends Player{
    constructor(name, type) {
        super(name, type);
        console.log('Wizard', this)
    }
    play(){
        console.log(`WEEEEEEEE I'm a ${this.type}`)
    }
}

const wizard1 = new Wizard('Shelly', 'Healer');
const wizard2 = new Wizard('Shawn', 'Dark Magic')
wizard1.introduce();
wizard2.introduce();

