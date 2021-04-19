// Using the CALL METHOD

let band1 = {name: 'Sublime', genre: 'Punk Rock'}
let band2 = {name: 'Linkin Park', genre: 'Rock'}

let band = function() {
    console.log(`His favorite band is ${this.name}, and his favorite genre is typically ${this.genre}`)
    console.log(this);  //Refering to window, not binded to BAND OBJECT
};

band.call(band1);   //call method now BINDS the band function to the band OBJECT
band.call(band2);   //CALL METHOD CAN ONLY BE INVOKED ON A FUNCTION. band1.call() WONT WORK




// Using the APPLY METHOD       (excepts single array of arguments)
function introduction(name, profession) {
    console.log(`My name is ${name} and I am a ${profession}.`)
}

introduction('Mary', 'Teacher');
introduction.apply(undefined, ['Mary', 'Teacher']);
introduction.call(undefined, 'Dave', 'Mechanic');




// Bind Method
let person1 = {
    name: 'Mary',
    getName: function() {
        return this.name;
    }
}

let person2 = {
    name: 'John'
}

let getNameCopy = person1.getName.bind(person2);
console.log(getNameCopy());
