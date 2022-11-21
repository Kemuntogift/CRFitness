const values = [1, 2, "string", 4];
values[2] = "Changed string "
    //accessing values

console.log(values[2]);

//manipulating arrays

values.push("last");
console.log(values);

//methods 
// pop()
// push()
// shift()
// unshift()
// concat()
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];
const arr3 = ["Robin", "Morgan"];
const myChildren = arr1.concat(arr2, arr3);
console.log(myChildren);
// filter()
const ages = [32, 33, 16, 40];
const result = ages.filter((age) => age >= 35);

// function checkAdult(age) {
//     return age >= 35;
// }
console.log(result.length);

// indexOf()
const fruitS = ["Apple", "Orange", "Banana", "Mango"];
let position = fruitS.indexOf("Mango") + 1;
console.log(position);


// includes()
console.log(fruitS.includes("Mango"));
console.log(fruitS.includes("Banana", 3)); //to find whether it exists at that position
// reverse()
let rev = fruitS.reverse();
console.log(rev);
// length() .......a property not a method
// join() returns an array as a string.
console.log(fruitS.join());
console.log(fruitS.join(" and ")); //replace comma


// every() checks if all array values pass a test.
const numbers = [45, 4, 9, 16, 25];
let allOver18 = numbers.every(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(allOver18);
// some() checks if some array values pass a test.
let someOver18 = numbers.some(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(someOver18);


// reduce() runs a function on each array element to produce (reduce it to) a single value.

let sum = numbers.reduce(myFunction);

function myFunction(total, value, index, array) {
    return total + value;
}
// map ()
const myNumbers = [65, 44, 12, 4];
let newArr = myNumbers.map((num) => num * 10);

// function myFunction(num) {
//     return num * 10;
// }
console.log(newArr);

// sort()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());

// find() returns the value of the first array element that passes a test function.
let first = myNumbers.find(myFunction);

function myFunction(value, index, array) {
    return value > 18;
}
console.log(first);


// keys() returns an Array Iterator object with the keys of an array.
const array1 = ['a', 'b', 'c'];
const iterator = array1.keys();

for (const key of iterator) {
    console.log(key);
}



// slice() //creates brand new array
const cities = ["Tokyo", "Cairo", "Los Angeles", "Paris", "Seattle"];

const newCityArr = cities.slice(2); //starting posittion of new array

console.log("Original: ", cities);
console.log("New: ", newCityArr);

// splice() //insert or delete elements in the array
const food = ['pizza', 'cake', 'salad', 'cookie'];

food.splice(2, 1); // index to start from and how many items
console.log(food);

const food2 = ['pizza', 'cake', 'salad', 'cookie'];
food2.splice(1, 0, "burrito");
console.log(food2);


//Array seraching and looping

// indexOf()
// filter()
const letters = ["a", "b", "c"]
const set = letters.filter(function(item) {
    console.log("Item: ", item);
    return item > "b";
});
console.log(set);
// find()
const letters2 = ["a", "bbb", "c"]
const set2 = letters2.find(function(item) {

    return item.length > 1;
});
console.log(set2);
//forEach()
const letters3 = ["a", "bbb", "c"]
letters3.forEach(function(item) {
    console.log(item);
});


//Arrays in the DOM
const containers = document.getElementsByClassName('container');
containers[2].classList.add('d-none');
console.log(containers);