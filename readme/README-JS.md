# JavaScript Review 
This is my review of JavaScript.
- Javascript: an object oriented programming lannguage
- gives web pages interactive elements that engage a user 
- allows for dynamic functionality

## Examples of Data Types
```javascript
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
```

## Examples of String Methods
```javascript
“strIng”.toUpperCase()
```
- makes all string upper case 
    - returns ```“STRING”```

```javascript
“sTring”.toLowerCase()
```
- makes all string lower case
    - returns ```“string”```

```javascript
“taylor”.indexOf(“y”)
```
- gives us index of char 
    - returns ```2```

```javascript
“Taylor”.replace(“lor”, “Tay”)
```
- replaces first string with the second
    - returns ```“TayTay”```


## Examples of Array Methods
```javascript
var favs = “sushi,tacos,kale”;
favs.split(“,”);				//splits into array with “,” as dividing point and removes the “,”
var nums = [“zero”, “one”, “two”];
nums.push(“three”);			    //pushes “three” as the next array element
nums.pop();				        //removes the last element in the array
nums.shift();				    //removes the first element in the array
nums.unshift(“negative”);		//shifts array right and “negative” in index 0
nums.sort();				    //sorts array alphabetically
nums.concat([1, “31”]);		    //adds 1 and “31” to the end of array
nums.splice(1, 3);			    //returns indices 1 and 2

```

## Examples of Functions
```javascript
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
```


## DOM Manipulation

```javascript
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
```

### More DOM Manipulation

```javascript
const list = document.createElement("ul");

// iterate through my friends array
for (let i = 0; i < friends.length; i++)
{
    let eachFriend = friends[i];

    // create an element
    const listItem = document.createElement("li");
    // added text to that element
    listItem.textContent = eachFriend;

    //append item to list
    list.appendChild(listItem);
}

console.log(list);

// listing for a click
headerThree.addEventListener("click", function()
{
    container.appendChild(list);
});
```

## Examples of Iterators

### ```.filter()```
```javascript
var misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]
let result = [];

const allString = misc.filter(element => 
{
    if (typeof element === "string")
    {
        result.push(element);
    }
    else if (Array.isArray(element)) 
    {
        getArrayString(element);
    }
} );

function getArrayString(array)
{
    for (let i = 0; i < array.length; i++)
    {
        if (typeof array[i] === "string")
        {
            result.push(array[i])
        } 
    }
}
```

### ```.foreach()```
```javascript
var foods = 
[
  {name: "Pizza", level: "very"},
  {name: "Tacos", level: "mostly"},
  {name: "Cottage Cheese", level: "not very"}
];

foods.forEach(function(element){
  console.log(element.name + " is " + element.level + " delicious");
});
```

### ```.map()```
```javascript
var phoneBook = [
   {Abe: "111-111-1111"},
   {Bob: "222-222-2222"},
   {Cam: "333-333-3333"},
   {Dan: "444-444-4444"},
   {Ern: "555-555-5555"},
   {Fry: "111-111-1111"},
   {Gil: "222-222-2222"},
   {Hal: "333-333-3333"},
   {Ike: "444-444-4444"},
   {Jim: "555-555-5555"},
   {Kip: "111-111-1111"},
   {Liv: "222-222-2222"},
   {Mia: "333-333-3333"},
   {Nik: "444-444-4444"},
   {Oli: "555-555-5555"},
   {Pam: "111-111-1111"},
   {Qiq: "222-222-2222"},
   {Rob: "333-333-3333"},
   {Stu: "444-444-4444"},
   {Tad: "555-555-5555"},
   {Uwe: "111-111-1111"},
   {Val: "222-222-2222"},
   {Wil: "333-333-3333"},
   {Xiu: "444-444-4444"},
   {Yam: "555-555-5555"},
   {Zed: "111-111-1111"}
  ];

const countryCoded = phoneBook.map(element => {
  let properties = Object.keys(element);
  //let properties = Object.keys(element)[0];
  let number = element[properties[0]];
  //let number = element[properties];
  let code = number[0];

  let codedNum = code + "-" + number;

  element[properties[0]] = codedNum;

  return element;
})
```

## HTML Forms Data Manipulation
```javascript
const resultsDiv = document.querySelector("#results");
console.log(resultsDiv);

new URLSearchParams(window.location.search).forEach((value, name) =>
{
    console.log(name);
    console.log(value);

    let resultElement = document.createElement("p");
    resultElement.textContent = name + " " + value;
    resultsDiv.appendChild(resultElement);
});
```





## Fetch
- take and manipulate data from other sources and sites
```javascript
fetch("https://pokeapi.co/api/v2/pokemon/lickitung")
.then(response =>
{
    return response.json();
})
.then(data =>
{
    ...
    ...
    ...
});
.catch(error =>
{
    ...
})
```
- ```fetch()``` takes the api of a specific site calls the site to access data
- the first ```.then(response => ...)``` takes the data and returns it to the next ```.then()```
- the next ```.then(data => ...)``` is the part where manipulation of the data taken from the api happens
- ```.catch(error => ...)``` catches any possible errors and does something when an error is caught

## Promises


## Async/Await


## Constructor Function
- blueprint that allows for the creation of many objects of the same type

```javascript
function Potatoes(name, type, weight, edible)
{
    this.name = name;
    this.type = type;
    this.weight = weight;
    this.edible = edible;
    this.intro = function()
    {
        console.log("Hi, I am a " + this.type + ".");
    }
}
```
- function is capitalized
- parameters of functions hold what the properties will equate to in the properties
- this is a pointer that points to the object that owns this code
    - ```this.___``` sets how we can access the property

```javascript
let aPotato = new Potatoes("Coolest Potato", "Sweet Potato", 5, true);
console.log(aPotato);
console.log(aPotato.edible);
aPotato.intro();
```
- sets aPotato as a new Potatoes object, created by the constructor
    - must use keyword ```new``` in creation of a new object through a constructor

## Class
- type of function that uses class to initiate it
- contains a constructor and functions that the object created through the class can use
```javascript
class Car
{
    constructor(year, make, model, color)
    {
        this.year = year;
        this.make = make;
        this.model = model;
        this.color = color;
    }

    drive()
    {
        console.log("Vroom");
    }

    intro()
    {
        console.log("This car is a " + this.make + " " + this.model);
    }
}
```
- to use constructor properties or functions, use dot notation per usual

```javascript
let tesla = new Car(2020, "Tesla", "Model S", "red");
console.log(tesla);
tesla.drive();
tesla.intro();
```
- created a new object of class Car through the constructor
    - properties inside constructor
- call functions of the new Car using dot notation
