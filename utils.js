// function declaration
function showMessage(message) {
    document.getElementById('message').textContent = message;
}

//function expression
let fn = function() {
    console.log("function declaration");
}

fn();

// passing information to functions
function showMessages(message, otherMesaage = "Assigned") {

    console.log(message, otherMesaage)
}
showMessages("First", "Second");

//function returning value
function double(value) {
    let num = value * 2;
    return num;
    //or return value * 2
}
console.log(double(12));


//function scope
//cannotlog out num in the example
let key = 5;

function scope(value) {
    let myNumber = 3;
    console.log("This is ", myNumber);
    return value * key

}
console.log(scope(6));
// console.log(myNumber);