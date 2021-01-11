//ES2020
//BigInt
//Nullish coalescing operator ??
//Optional chaining Operator ?.
//Promised.allSettled
//globalThis

//Optional chaining Operator ?.

let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6
    }
}

let jose_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: 'lightning'
    }
}


let weight = will_pokemon.pikachu.weight;
console.log('weight: ', weight);



// if(jose_pokemon.pikachu && jose_pokemon.piachu.weight) {
//     let weight2 = jose_pokemon.pikachu.weight;
//     console.log(weight2)
// } else {
//     let weight2 = undefined;
//     console.log(weight2)
//
// }

let weight3 = jose_pokemon?.pikachu?.weight

console.log(weight3);



//Nullish coalescing operator ??























