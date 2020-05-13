// *****************************************************************************
// Q1 - create an object called me with 2 properties: name and age
// *****************************************************************************
let me = {
    name: "Aileen",
    age: 37,
};

// *****************************************************************************
// Q2 - use the increment operator to increase the value of your age by 2
// *****************************************************************************
console.log(me.age)   // so i can see what it is before i change it
me.age++;
console.log(me.age);   // my age after its been increased by 2

// *****************************************************************************
// Q3 - add another property called hobbies and set the value as an array of strings
// the array must have at least 3 values.
// *****************************************************************************
me.hobbies = [
            "Shopping",
            "Baking",
            "Sleeping"
    ];

    // *****************************************************************************
// Q4 - add another property called pets and set the value as an array of strings
// the array must have 3 properties name/age/species
// *****************************************************************************
me.pets = [
        {
            name: "Muddy",
            age: 10,
            species: "dog" 
        },{
            name: "Pocket",
            age: 8,
            species: "dog" 
        },{
            name: "Tweety",
            age: 5,
            species: "bird" 
        }
    ];
    // for (let i = 0; i < me.pets.length; i++) {
    //     let pet = me.pets[i];
    //     console.log(`My ${pet.species} is ${pet.age} years old. Their name is ${pet.name}.`);
    // }
// *****************************************************************************
// Q5 - string concatenantion to print out a list of your hobbies in a sentence.
// *****************************************************************************
let hobbies = "My hobbies are ";
for (let i = 0; i < me.hobbies.length; i++) {
    let hobby = me.hobbies[i];
    hobbies += hobby;
    if(i == me.hobbies.length - 2) {
        // For the second last element
        hobbies += " and ";
    } else if (i == me.hobbies.length - 1){
        // For the last element
        hobbies += ".";
    } else {
        // For all the other elements
        hobbies += ", ";
    }
}
console.log(hobbies)
