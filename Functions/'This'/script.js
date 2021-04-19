let message = {
    name: 'Rabie',
    regularFunction: function() {
        console.log(this)  //Refers to the MESSAGE OBJECT
        console.log(`Hello ${this.name}`)
    },
    arrowFunction: () => {
        console.log(this);  //Refers to WINDOW OBJECT
        console.log(`Hello ${this.name}`)
    }
}

message.regularFunction();
message.arrowFunction();

