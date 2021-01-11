//The new way to do it is by using FETCH

fetch('/my/urls').then(response => {
    console.log(response);
});

//page updates are a lot quicker and we dont have to wait for the page to reload
//This allows webpages to feel more responsive
//it allows apps and websites to be more dynamic

//What happens with ajax?
//An event occurs on a webpage (sign in)
//HTTP request sends request to server
// server processes request and sends response  back to the webpage
//the response is read by js and the user is able to log in, at the same
// time only rendering a small portion of the webpage
//we build content on the fly only using data that we need




function getUsers(){
    //fetch allows us to make an AJAX request using fetch api
    fetch('https://jsonplaceholder.typicode.com/users')
        //we then get a response but we have to parse it so JS can read it
        //we can achieve this with .json method --> converts it into something we can use in js
        //that is going to return another promise so we have to .then again
        //it returns data so we are going to name it data
        //we log it to make sure we receive all of the user from the api
        .then(response => response.json())
        .then(data => console.log(data))
}


//AJAX allows us to make single page applications
//