//ASYNC AWAIT
//created on ES* and built on promises

//a promise can be thought as
//I OWE U
//I promise to return something to you, such as a AJAX or HTTP call
//Getting info for a data base, thing that take take to return

//Regular promise function
moveplayer(100, 'Left')
    .then(() => moveplayer(400, 'Left'))
    .then(() => moveplayer(10, 'Right'))
    .then(() => moveplayer(330, 'Left'))

//Async await functions --> makes code easier to read

async function playerStart() {
    const firstMove = await moveplayer(100, 'Left'); //pause
    await moveplayer(400, 'Left'); //pause
    await moveplayer(10, 'Right'); //pause
    await moveplayer(330, 'Left'); //pause
}

//await keyword pauses the function until it has something for me
//we can use await infront of any function that has a promise

//REALISTIC EXAMPLE

fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log)

//how can we turn this into an async function

async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json();
    console.log(data);
}


const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//using promises to get all the data from the API
Promise.all(urls.map(urls =>
    fetch(urls).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums',array[2]);
}).catch('Error')

//lets convert it into an async function

const getData = async function() {

    const [ users, posts, albums ] = await Promise.all(urls.map(urls =>
        fetch(urls).then(resp => resp.json())
    ))
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
}




//Try catch is the equivalent to .catch on the
const getData1 = async function() {

    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(urls =>
            fetch(urls).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch(err) {
        console.log('Error', err);
    }

}























