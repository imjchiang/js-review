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


//DOM
const container = document.querySelector(".container");
console.log(container);

// create an element
const headerTwo = document.createElement("h2");
headerTwo.textContent = "My First JS Review";

container.appendChild(headerTwo);

// add a class to headerTwo
headerTwo.classList.add("subtitle", "header-two");
//headerTwo.setAttribute("class", "header-two");

// remove class from headerTwo
headerTwo.classList.remove("header-two")
console.log(headerTwo);


headerTwo.addEventListener("click", function()
{
    headerTwo.textContent = "Josh";
});

// make another element
const headerThree = document.createElement("h2");
headerThree.textContent = "Friends";

container.appendChild(headerThree);

console.log(headerThree);

const list = document.createElement("ul");

// iterate through my friends array
for (let i = 0; i < friends.length; i++)
{
    let eachFriend = friends[i];

    const listItem = document.createElement("li");
    listItem.textContent = eachFriend;

    list.appendChild(listItem);
}

console.log(list);

headerThree.addEventListener("click", function()
{
    container.appendChild(list);
});
// reference each friend
// create a li
// add textContent to that li
// append that to a ul (unordered list)


// Problem Solving

// what do I start with?
// what do I hope to end up with

// understand the problem
// where the issue start and ...

// break it down into more mangeable problems

/*
- [ ] Do I understand what the prompt is asking?
- [ ] Am I able to break the problem down?
- [ ] What is my strategy for solving the problem?
- [ ] Do I understand what my code is doing?
- [ ] Am I able to foresee any edge cases?
- [ ] Am I able to track the order of the code that is being executed?
- [ ] Am I able to track the values of the variables?
- [ ] Am I able to walk through my code line by line with an example?
- [ ] Do I have a working solution?
*/


//fizzBuzz
//Write a function that does the following:
    //takes in an array
    //check each number in the array
    //check if the number is divisible by 5 and 3 === FizzBuzz
    //if the number is divisible by 3 === Fizz
    //if the number is divisble by 5 === Buzz

//For example:
    //[3, 5, 15, 20, 9, 7]
    //return ["Fizz", "Buzz", "FizzBuzz", "Buzz", "Fizz", 7]

function fizzBuzz(array)
{
    let fbArray = [];

    for (let i = 0; i < array.length; i++)
    {
        if (array[i] % 3 === 0 && array[i] % 5 === 0)
        {
            fbArray[i] = "FizzBuzz";
        }
        else if (array[i] % 3 === 0)
        {
            fbArray[i] = "Fizz";
        }
        else if (array[i] % 5 === 0)
        {
            fbArray[i] = "Buzz";
        }
        else
        {
            fbArray[i] = array[i];
        }
    }

    return fbArray;
}

