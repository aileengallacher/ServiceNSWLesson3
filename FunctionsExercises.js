// // Functions q1
// //
function addNumbers(num1, num2) {
    return num1 + num2;
}

let me = {
    name: "Aileen",
    age: 37
};

console.log(me);
console.log("Aileen goes to work");
me.age = addNumbers(me.age, 4);
console.log(me);


// // Functions q2
function getMaxNUmber(num1, num2) {
    if (num1 > num2) {
        return num1;
    }
    return num2;
}
let biggestNumber = getMaxNUmber(12,19);
console.log(biggestNumber);


// // Functions q3
function myArrayPrinter(myArray) {
    for (let i = 0; i < myArray.length; i++) {
        let myItem = myArray[i];
        console.log(myItem);
    }
}

let names = [
    "Jim",
    "Bob",
    "Luke"
];

myArrayPrinter(names);

let dogs = [
    "Rex",
    "Scooby"
]
myArrayPrinter(dogs);

// // Functions q4
function createPerson(name, age) {
    return {
        name: name,
        age: age
    }
}

let luke = createPerson("Aileen", 37);

console.log(luke);

//
// Functions q5 - find the oldest person in the list of people (people is the object)
//
//
let people = [
    {
        name: "Aileen",
        age: 37
    },
    {
        name: "Shannon",
        age: 38
    },
    {
        name: "Ayla",
        age: 7
    },
    {
        name: "Aubree",
        age: 5
    },
    {
        name: "Mason",
        age: 2
    }
];

function getOldest(array) {
    let oldestCurrent;
    for (let i = 0; i < array.length; i++) {
        let person = array[i];
        if (oldestCurrent) {
            if (person.age > oldestCurrent.age) {
                oldestCurrent = person;
            }
        } else {
            oldestCurrent = person;
        }
    }
    return oldestCurrent.name;
}

console.log(getOldest(people));