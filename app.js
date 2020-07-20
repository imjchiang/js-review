let name = "Josh Chiang";
let age = 32;
let isCool = true;
const friends = ["Bob", "John", "Joe", "Mike", "Derk"];

const tesla = 
{
    industry: "Electric Cars",
    ceo: "Elon Musk",
    yearFounded: 2003,
    foundingMembers: ["Elon Musk", "JB Straubel", "Martin Eberard"],
    stockTicker: "TSLA",
    vehicles: 
    {
        vehicleOne: "Model S",
        vehicleTwo: "Model X",
        vehicleThree: "Model 3"
    },
    print: function() 
    {
        console.log("The CEO of Tesla is " + this.ceo);
    }
}

tesla.stockPrice = 1643.00;

console.log(name);
console.log(age);
console.log(isCool);
console.log(friends);
console.log(tesla);
console.log(tesla.vehicles.vehicleThree);
console.log(tesla["vehicles"]["vehicleThree"]);

tesla.print();


function printFriends(array) 
{
    array.forEach(friend => 
    {
        console.log(friend);
    });
    array.forEach(function(element)
    {});
}


function printName(element) 
{
    console.log(element);
}

friends.forEach(function(friend)
{
    printName(friend);
});

friends.forEach(friend => 
{
    printName(friend);
})

printFriends(friends);
printFriends(tesla.foundingMembers);


// standard function
function addNumbers(num1, num2) 
{
    return num1 + num2;
}

// function expression
const multiplyNumbers = function(num1, num2) 
{
    return num1 * num2;
};

// arrow function
const subtractNumbers = (num1, num2) => 
{
    return num1 - num2;
};


