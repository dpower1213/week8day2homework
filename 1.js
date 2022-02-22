let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        McDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}
function foodWorld(person3){
    for(let food in person3){
        if (person3[food][0] instanceof Object){
            console.log(`My favorite ${food} are:`)
            for(let rest in person3[food][0]){
                
                console.log(`\t${person3[food][0][rest]} from ${rest}`);
            };
        }
        else if (person3[food] instanceof Array){
            console.log(`My favorite ${food}'s are:`);
            for(let dish of person3[food]){
                console.log(`\t${dish}`);
            };
        }
        else{
            console.log(`My favorite ${food} are ${person3[food].toLowerCase()}`);
        };
    };
}
foodWorld(person3)
