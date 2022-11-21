console.log("Logged");


const activities = 10;

let $price = 150,
    dislike = null,
    random = "121",
    myName = "Gift",
    greeting = "Hello \"Friend!\"",
    _age = 12,
    athletic = true,
    likes = {
        activity: "Yoga",
        food: "junk"
    };

// Changing variable value
$price = $price % 14;
// $price = 1.1 + 1.3;

let amount = Number.parseInt(random);

showMessage($price);

console.log(typeof likes);
console.log(likes.activity);
console.log(typeof amount);
console.log(typeof null);

// conditional if

if ($price !== 15) {
    console.log("Different price");
}

// T or F
if (+(1.1 + 1.3).toFixed(2) === 2.4) {
    console.log("correct");
}

//if else

let cars = 20;
if (cars >= 15) {
    console.log("Greater than range");
} else if (cars < 10) {
    console.log("Below the range");
} else console.log("asdfg");

//comparing === and ==
if (1 == "1") {
    console.log("true")
} else console.log("false")

// Ternary operator
cars < 10 ? console.log("Less than") : console.log("Greater");

// for loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

//While loop
let count = 7;
while (count > 0) {
    console.log(count);
    count--;
}

//Do while loop
let laps = 3;
do {
    console.log(laps);
    laps++;
} while (laps < 6);