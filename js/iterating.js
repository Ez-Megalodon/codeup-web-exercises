(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    console.log("1st todo:");
    let names = ["Jake", "Ezra", "Cameron", "John"];

    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("2nd todo:");
    console.log(`Number of elements in the name array: ${names.length}`);

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log("3rd todo:");
    console.log(names[0],names[1],names[2],names[3]);

    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
    console.log("4th todo:");
    for (let i = 0; i < names.length; i++){
        console.log(names[i]);
    }

    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log("5th todo:");
    names.forEach((name) => {
        console.log(name);
    });

    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
    console.log("6th todo:");
    //return first element of the array
    const firstArrayItem = (array) => {
        return array.at(0);
    }
    console.log(`Element located at first index: ${firstArrayItem(names)}`);
    //return second element of array
    const secondArrayItem = (array) => {
        return array.at(1);
    }
    console.log(`Element located at second index: ${secondArrayItem(names)}`);
    //return last element in array
    const lastArrayItem = (array) => {
        return array.at(-1);
    }
    console.log(`Element located at last index: ${lastArrayItem(names)}`);

})();
