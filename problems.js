// Write a function `isInside(array, ele)` that returns true if `ele` is an element
// inside of the `array`, false otherwise.
// HINT: use indexOf
function isInside(array, ele)
{
    if(array.indexOf(ele) >= 0)
    {
        return true;
    }
    return false;
}

//tests
console.log(isInside(['taylor', 'rome', 'adam'], 'rome'));
console.log("true");
console.log(isInside(['pete', 'adam', 'taylor'], 'fred'));
console.log("false");


// Write a function `reverseStr(str)` that takes in a string as a parameter and
// returns the string but with the characters in reverse.
function reverseStr(str)
{
    return str.split("").reverse().join("");
}

//tests
console.log(reverseStr('bootcamp'));
console.log("pmactoob");
console.log(reverseStr('General Assembly'));
console.log("ylbmessA lareneG");


// Write a function `luckySevens(max)` that returns an array of all numbers up
// to max (inclusive) that are divisible by 7.
function luckySevens(max)
{
    let sevens = [];
    for (let i = 7; i <= max; i+=7)
    {
        sevens.push(i);
    }
    return sevens;
}

//tests
console.log(luckySevens(25));
console.log([ 7, 14, 21 ]);
console.log(luckySevens(42));
console.log([ 7, 14, 21, 28, 35, 42 ]);


// Write a function `copyMachine(element, num)` that takes in an element and a number
// it should return an array of length `num` that is filled with `element`.
function copyMachine(element, num)
{
    let copied = [];
    for (let i = 0; i < num; i++)
    {
        copied.push(element);
    }
    return copied;
}

//tests
console.log(copyMachine('candy', 0));
console.log([]);
console.log(copyMachine('candy', 2));
console.log([ 'candy', 'candy' ]);
console.log(copyMachine('bread', 4));
console.log([ 'bread', 'bread', 'bread', 'bread' ]);
console.log(copyMachine(11, 6));
console.log([ 11, 11, 11, 11, 11, 11 ]);


// Write a function `everyOtherWord(sentence)` that takes in a sentence and returns
// an array containing every other word in that sentence.
function everyOtherWord(sentence)
{
    let evens = [];
    let sentenceArray = sentence.split(" ");
    for (let i = 0; i < sentenceArray.length; i++)
    {
        if (i % 2 === 0)
        {
            evens.push(sentenceArray[i]);
        }
    }
    return evens;
}

//tests
console.log(everyOtherWord('hello how are you doing on this lovely day?'));
console.log([ 'hello', 'are', 'doing', 'this', 'day?' ]);
console.log(everyOtherWord('the weather is wonderful'));
console.log([ 'the', 'is' ]);


// Write a function `wordYeller(sentence)` that takes in a sentence string as
// input. It should return the sentence where every word has an exclamation
// point behind it, except words that already have punctuation. Punctuation
// marks are ". , ! ? ; :"
function wordYeller(sentence)
{
    let coolerSentence = "";
    let sentenceArray = sentence.split(" ");
    const conditions = [".", ",", "!", "?", ";", ":"];
    for (let i = 0; i < sentenceArray.length; i++)
    {
        for (let j = 0; j < conditions.length; j++)
        {
            if (sentenceArray[i].charAt(sentenceArray[i].length - 1) === conditions[j])
            {
                sentenceArray[i] += " ";
                break;
            }
            else if (j === conditions.length - 1)
            {
                sentenceArray[i] += "! ";
            }
        }
        coolerSentence = coolerSentence.concat(sentenceArray[i]);
    }
    return coolerSentence.substring(0, coolerSentence.length - 1);
}

//tests
console.log(wordYeller("Stop it now! Please, wont you stop?"));
console.log("Stop! it! now! Please, wont! you! stop?");
console.log(wordYeller("Go to the store and grab the following: milk, bread, run, and cake"));
console.log("Go! to! the! store! and! grab! the! following: milk, bread, run, and! cake!");


// Write a function `arraySubstring(words, str)` that takes in an array of
// strings and a string as arguments and returns an array where each element is
// replaced with true if the string is a substring of the element and false if
// it is not.
function arraySubstring(words, str)
{
    let itsIn = [];
    for (let i = 0; i < words.length; i++)
    {
        if (words[i].search(str) !== -1)
        {
            itsIn[i] = true;
        }
        else
        {
            itsIn[i] = false;
        }
    }
    return itsIn;
}

//tests
console.log(arraySubstring(["hello", "history", "helix", "hellos"],"hel"));
console.log([true, false, true, true]);
console.log(arraySubstring(["prefix", "problems", "pragmatic", "prefer"], "pre"));
console.log([true, false, false, true]);


// Write a function evenCaps(sentence) that takes in a sentence as an
// argument and returns the same string with each even index being
// capitalized. Index 0 counts as even.
function evenCaps(sentence)
{

}

//tests
console.log(evenCaps("Tom got a small piece of pie"));
console.log("ToM GoT A SmAlL PiEcE Of pIe");
console.log(evenCaps("the book is in front of the table"));
console.log("ThE BoOk iS In fRoNt oF ThE TaBlE");

