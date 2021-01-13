//Primitive types are passed by value
const a = 5;
const b = 10;



let obj1 = {name: 'Yao', password: '123'};
let obj2 = obj1;

obj2.password = 'easypeasy';

console.log(obj1);
console.log(obj2);
console.log('----------------------');

//The password will be the same on both objects because the are pointing to the same memory location

const c = [1,2,3,4,5];
const d = [].concat(c);
d.push(16546132156);
console.log('d', d);
console.log('c', c);
console.log('----------------------');

////////////////////////
let obj = {
    a: 'a',
    b: 'b',
    c:'c',
    d: {
        deep: 'try and copy me'
    }
};

//we can clone an object by doing this
let clone = Object.assign({}, obj);

//this is another format to clone an object
let clone2 = {...obj}
let superClone = JSON.parse(JSON.stringify(obj))

obj.c = 5;
obj.d.deep = 'Hahahaha';
console.log('original',obj);
console.log('clone',clone);
console.log('clone2',clone2);
console.log('superclone',superClone);