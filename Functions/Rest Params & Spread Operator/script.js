// Default Paramteres
function sayHi(name = 'World') {        // variable 'name' is hard-coded
    console.log(`Hello ${name}`)
}

sayHi();    //Hello World
sayHi('John');  //Hello John


// ** DEFAULT PARAMETERS MUST ALWAYS COME AFTER REGULAR PARAMETERS
function sayHi(message, name = 'World') {   //message cannot come after name
    console.log(`${message} ${name}`)
}

sayHi('Hello');
sayHi('Hello', 'Rabie');





// Rest Parameters      **Rest parameters must also come AFTER regular parameters
let cityCompliment = function (...cities) {
    cities.forEach(city => {
        console.log(`${city} is a beautiful city`);
    })
}

cityCompliment('Madrid', 'Tokyo', 'Beirut');





// Spread Operator (opposite of rest parameter. It allows a function to take an ARRAY as an argument)
function greet(person1, person2) {
    console.log(`Hello ${person1} and ${person2}`)
}

let names = ['Jake', 'Matt'];

greet(...names);

// example 2
function display(char1, char2, char3, char4) {
    console.log(char1, char2, char3, char4);
}

let letters = 'abcd';
display(...letters);