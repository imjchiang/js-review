# JavaScript Review 
This is my review of JavaScript.

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
