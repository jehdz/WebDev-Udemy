
var database = [
    {
        username: "jose",
        password: "password123"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
    },
];

var newsfeed = [
    {
        username: "Bobby",
        timeline: "So tired from all this learning"
    },
    {
        username: "sally",
        timeline: "javascript is so cool"
    },
    {
        username: "Mitch",
        timeline: "javascript is pretty easy to learn"
    }
];

var usernamePrompt = prompt(" What is your username?");
var passwordPrompt = prompt(" What is your password?");




function isUserValid(username, password){
    for(var i = 0; i < database.length; i++){
        if (database[i].username  === username &&
            database[i].password === password) {
            return true;
        }
    }
    return false;
}



function singIn(username, password){
    if(isUserValid(username, password)){
        console.log(newsfeed)
    } else {
        alert("Sorry, wrong username or password")
    }
}

    // if (user === database[0].username &&
    //     pass === database[0].password) {
    //     console.log(newsfeed)
    // } else {
    //     alert("Sorry, wrong user name and password")
    // }
// }


singIn(usernamePrompt, passwordPrompt);


