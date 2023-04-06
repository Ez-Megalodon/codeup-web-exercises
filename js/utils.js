"use strict";
// IIFE (Immediately-invoked Function Expression) arrow function
// -------USE THIS IN MOST, IF NOT ALL .js FILES--------
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
export const randomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//-----------turn an array into unordered list------------
const arrayToUnorderedList = (array) => {
    let listedArray = array.join("</li><li>");
    let first = "<ul><li>" + listedArray;
    return first + "</li></ul>";
}

//------------make an array with random numbers-------------
const arrayOfRandomNumbers = (lengthOfArray) =>{
    const array = [];
    for (let i = 0; i < lengthOfArray; i++){
        let newRandomNumber = randomNumber(1, lengthOfArray + 100);
        while(array.includes(newRandomNumber)){
            newRandomNumber = randomNumber(1, lengthOfArray + 100);
        }
        array.push(newRandomNumber);
    }
    return array;

}

//DOM JS
// -------------------DROP DOWN MENU JS-------------------
let dropdowns = document.querySelectorAll('[data-dropdown="parent"]');
dropdowns.forEach(function(dropdown){
    let toggle = dropdown.querySelector('[data-dropdown="toggle"]');
    toggle.addEventListener('click', function(){
        dropdowns.forEach(function(element){
            // if already has class of open and is not this element, remove it
            if (element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open');
            }
        })
        dropdown.classList.toggle('open');
    });
});
// pageWrapper.addEventListener('click', function(event){
//     //if the event target is not a dropdown, close all dropdowns
//     if (!event.target.closest('[data-dropdown="parent"]')) {
//         dropdowns.forEach(function(dropdown){
//             dropdown.classList.remove('open');
//         });
//     }
// });