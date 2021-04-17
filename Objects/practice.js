
(function body() {
    const portugal = {
        colors: ['green', 'maroon'],
        capital: 'Lisbon',
        region: 'Western Europe',
        population: 10000000,
        areChamps: function() {
            console.log(this.capital)
        },
        weather: {
            summer: 'warm',
            winter: 'temperate'
        }
    }
    
    portugal.areChamps();
    
    // (Writable property)
    Object.defineProperty(portugal, 'capital', {writable: false});  //capital can't be changed
    //    console.log(Object.getOwnPropertyDescriptor(portugal, 'capital'));
    portugal.capital = 'Porto';
    console.log(portugal['capital']);
    
    Object.freeze(portugal.weather);    //freezes 'weather' property
    portugal.weather.summer = 'cold';
    console.log(portugal.weather);



    // For in Looping through properties  (Enumerable property)
    Object.defineProperty(portugal, 'population', {enumerable: false})  //population removed form object

    for(let property in portugal) {
        console.log(`${property} : ${portugal[property]}`)
    }

    console.log(JSON.stringify(portugal))


    // (Confgurable Property)
    Object.defineProperty(portugal, 'colors', {configurable: false});
    Object.defineProperty(portugal, 'colors', {enumerable: true});  //Will return error, configurable prevents properties from being re-defined
    // It does allow you to change the WRITABLE PROPERTY


    Object.defineProperty(portugal, 'weather', {configurable: false});  //Prevents properties from being deleted
    delete portugal.weather;    //deleting properties within objects
    console.log(portugal);




    // Getters & Setters
    const person = {
        firstName: 'Rabie',
        lastName: 'Nasser',
        age: 22
    }

    Object.defineProperty(person, 'fullName', {
        // Get
        get: function() {
            return this.firstName + ' ' + this.lastName;
        },

        // Set
        set: function(value) {
            let nameParts = value.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }
    })

    console.log(person.fullName);

    person.fullName = 'Thomas Muller';
    console.log(person.fullName);


})()