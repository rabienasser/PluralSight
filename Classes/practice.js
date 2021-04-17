class Club {
    constructor(name, colors, city, country, bestPlayer, manager) {
        this.name = name;
        this.colors = colors;
        this.city = city;
        this.country = country;
        this.bestPlayer = bestPlayer;
        this.manager = manager;
        this.titles;
    }

    // Adding Methods within Classes
    isChampions() {
        return this.titles >= 1;
    }

    // Creating a getter
    get clubLocation() {
        return `${this.city}, ${this.country}`
    }

    // Creating a setter
    set clubLocation(clubLocation) {
        let locationParts = clubLocation.split(' ');
        this.city = locationParts[0];
        this.country = locationParts[1];
    }
}

const PSG = new Club('PSG', ['Red', 'White', 'Navy'], 'Paris', 'France', 'Kylian Mbappe', 'Pochettino')
const realMadrid = new Club('Real Madrid', 'white', 'Madrid', 'Spain', 'Karim Benzema', 'Zidane')

console.log(PSG.colors[2]);
console.log(realMadrid.bestPlayer);

PSG.titles = 2;
realMadrid.title = 1;

console.log(PSG);
console.log(realMadrid.clubLocation)

console.log(realMadrid);
realMadrid.clubLocation = 'Madrid Spain'
console.log(realMadrid.clubLocation)

console.log(PSG.isChampions())



// Class Inheritance
class EnglishClubs extends Club {
    constructor(name, colors, city, country, bestPlayer, manager, league) {   //Adding onto Club class w league
        super(name, colors, city, country, bestPlayer, manager);
        this.league = league;
    }
}

const arsenal = new EnglishClubs('Arsenal', ['Red', 'White'], 'London', 'England', 'Aubameyang', 'Arteta', 'Premier League')
arsenal.ground = 'Emirates'
console.log(arsenal)