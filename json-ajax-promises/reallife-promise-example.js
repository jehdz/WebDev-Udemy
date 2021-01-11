const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
]

//how can we grab the all?

Promise.all(urls.map(urls =>
     fetch(urls).then(resp => resp.json())
)).then(array => {
    console.log('users', array[0]);
    console.log('posts', array[1]);
    console.log('albums',array[2]);
}).catch('Error')

//a promise can only fail or succed once
// this is extremly useful for async programming

