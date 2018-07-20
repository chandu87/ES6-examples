console.log("--- Parks Report ---");

class Element{
    constructor(name, buildYear){
        this.name = name;
        this.buildYear = buildYear;
    }
}
class Parks extends Element{
    constructor(name, buildYear, area, numberOfTrees){
    super(name, buildYear);
    this.area = area;
    this.numberOfTrees = numberOfTrees;
    }
    treeDenisty(){
        const density = this.numberOfTrees/ this.area;
        console.log(`${this.name} Park has tree density of ${density} trees per square meter`);
    }
    // averageAgeOfPark(){

    // }
    // MoreThanThousandTrees(){

    // }
}

class Streets extends Element{
    constructor(name, buildYear, length, size=3){
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreets(){
        const classification= new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'large');
        classification.set(5, 'very large');
        console.log(`Street name is ${this.name}, It was build in ${this.buildYear} and is a ${classification.get(this.size)} park `);
    }
    lengthOfTownStreets(){

    }
}

const parks = [
                new Parks("park1", 2016, 5, 1001),
                new Parks("park2", 1987, 2, 523), 
                new Parks("park3", 1990, 4, 943)
            ];
const streets = [
                new Streets("Bagsvard", 1999, 2, 3),
                new Streets("varebrovej", 1980, 3,5),
                new Streets('4th Street', 2015, 0.8),
                new Streets('Sunset Boulevard', 1982, 2.5, 5)
            ];
function calculateAvg(arrayOfData){
    const sum = arrayOfData.reduce((prev, cur, index)=> prev + cur ,0);
    return [sum, sum/arrayOfData.length];
}            
function parksReport(parks){
    //tree denisty
    parks.forEach(park => park.treeDenisty());
    //Avg ages of parks
    const ages = parks.map(park => 2018 - park.buildYear);
    const[sumOfAges, avgAge] = calculateAvg(ages);
    console.log(`Our ${parks.length} parks have an averge of ${avgAge}`);
}
function streetsReport(){
    streets.forEach(street=>street.classifyStreets());
}
parksReport(parks);
streetsReport();