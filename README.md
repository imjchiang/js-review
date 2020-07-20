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