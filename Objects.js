// **************************************************
// This declares the object as myDog 
// the name of myDog to be Rex and the age to be 6
// **************************************************
let myDog = {
    name: "Rex",
    age: 6
};
// *********************************
// Outputs myDog.name set on line 6
// *********************************
console.log(myDog.name);
myDog.name = "Buffy";
// **************************************************
// Outputs myDog.name reassigned on line 13 to "Buffy"
// **************************************************
console.log(myDog.name);
myDog.owner = "Luke";
// **************************************************
// Outputs all the properties withing my object myDog
// **************************************************
console.log(myDog);