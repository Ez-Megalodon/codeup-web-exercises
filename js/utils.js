"use strict";
// IIFE (Immediately-invoked Function Expression) arrow function <-------USE THIS IN MOST, IF NOT ALL .js FILES--------

(() => {
    //all .js code goes here
})();

//--------USE THIS FOR FUNCTIONS IN JavaScript------

const variable = (parameter) => {
    //function code here
}

//------Returns true if (num) is even-------------

const isEven = (num) => {
    let result = num % 2 === 0;
    return result;
}

// ---------Function to reverse a string-----------
const reverseString = (string) => {
    let stringArray = string.split('');
    console.log(stringArray);
    let reverseStringArray = stringArray.reverse();
    console.log(reverseStringArray);
    return reverseStringArray.join('');

}

//---------Money format----------

function formatToLocaleString(number, language, country, currency){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

//-------Default USD Format ---------------

function formatToUsd(number, language='en', country='US', currency='USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

//-----is the input numeric-------
const isNumericAndNotNaN = (input) =>{
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'string' && input !== "boolean";
}

//------create a random number between two numbers------
const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//-----------turn an array into unordered list------------
const arrayToUnorderedList = (array) => {
    let listedArray = array.join("</li><li>");
    let first = "<ul><li>" + listedArray;
    return first + "</li></ul>";
}
