//scope --> variable access

//the scope of a only lives inside the function bb. We cant access
//through the window "root" scope

var b = "can i access this?"

function bb() {
    var a = "hello";
}

//Root scope

var fun = 5;

function funFunction(){
    //child scope

    var fun = "hellllooooo";
    console.log(1, fun);
}


function funerFunction(){
    var fun = "Byeee";
    console.log(2, fun);
}

function funestFunction(){
    fun = "AHHHHH";
    console.log(3, fun);
}


console.log("window", fun);