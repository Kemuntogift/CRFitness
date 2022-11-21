// let mySymbol = symbol();
let person = {
    name: "Lily",
    age: 12,
    activities: {
        hate: "swimming",
        love: "hiking"
    },
    working: true,
    // [mySymbol]: "Top secret",
    showInfo: function showMe() {
        console.log(this); //refers to the property
    }
};

// person.age = 16;
person['age'] = 16
console.log(person.age);
person.showInfo();
let keys = Object.keys(person); // keys or values will give an array
// for (let i = 0; i < keys.length; i++) {
//     console.log(person[keys[i]]);
// }

for (let prop of Object.values(person)) {
    console.log(prop)
}


//passing objects to functions
function incrementAge(person) {
    person.age++;
}
incrementAge(person);
console.log(person.age);


// Built-itn objects
// date, math
//MDN Standard built-in objects


//styling DOMelements
const header = document.getElementById('message');
header.style.color = '#FF0000';

const listItems = document.querySelectorAll('.nav-link');
for (i = 0; i < listItems.length; i++) {
    listItems[i].style.color = '#FF0000';
}
console.log(listItems);

// Creating item 

const nav = document.querySelector('.navbar-nav');
const li = document.createElement('li');

// add the element
nav.append(li);

// modifying the text 
li.innerText = "New Link";


//modifying attributes and classes
li.classList.add('nav-link');
li.setAttribute('id', 'n-link'); //type, name, placeholder
// li.removeAttribute('id'); //methods ....hasAttribute, getAttribute


// removing elements 
// li.remove();


//Traversal 
//parent node traversal
console.log(nav.parentNode);
console.log(nav.parentElement.parentElement);

//child node traversal
console.log(nav.childNodes); // or children
console.log(nav.firstChild); // or lastChild
console.log(nav.firstElementChild); // or lastElementChild

//sibling node traversal
console.log(nav.nextElementSibling); //or previousElementSibling, previousSibling, nextSibling


//Detecting button clicks

const button = document.getElementById('see-review');
button.addEventListener('click', function() {
    const review = document.getElementById('review');

    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    } else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }

});