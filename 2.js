// Write an object prototype for a Person that has a name and age, has a
// printInfo method, and also has a method that 
// increments the persons age by 1 each time the method is called.
// Create two people using the 'new' keyword, and print 
// both of their infos and increment one persons
// age by 3 years. Use an arrow function for both methods

// Create our Person Prototype
// Use an arrow to create the printInfo method
// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age   
class Age{
    constructor(name, age){
        this.name = name;
        this.age = age;
    };
    printInfo=()=>{console.log(`${this.name} is ${this.age} decades old.`)};
    sumAge=(time)=>{this.age+=time};
    }
    let MitchMconnell = new Age('MitchMcConnell', 99);
    let BigBird = new Age('BigBird', 29);
    
    MitchMconnell.printInfo();
    BigBird.printInfo();
    
    MitchMconnell.sumAge(1);
    MitchMconnell.printInfo();
    BigBird.sumAge(3);
    BigBird.printInfo();