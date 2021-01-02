// ternary expression

// condition ? expression1 : expression2

//if condition is true, do expression1
//if false, do expression2

//example

function isUserValid(bool){
    return bool;
}

var answer = isUserValid(true) ? "You may enter" : "Access denied"


var automatedAnswer =
    "Your account # is " + (isUserValid(false) ? "1621S1545SD2FG" : "not available");

//Switch statement

function moveCommand(direction){
    var whatHappens;
    switch (direction) {
        case "forward":
            whatHappens = "you encountered a monster";
            break;
        case "back":
            whatHappens = "you arrived home";
            break;
        case "right":
            whatHappens = "you found a river";
            break;
        case "forward":
            whatHappens = "you run into a troll";
            break;
        default:
            whatHappens = "please enter a valid direction";
    }
    return whatHappens;
}