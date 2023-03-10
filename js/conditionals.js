"use strict";
(()=>{
    /* ########################################################################## */

    /**
     * TODO:
     * Create a function named `analyzeColor` that accepts a string that is a color
     * name as input. This function should return a message which relates to the
     * color stated in the argument of the function. For colors you do not have
     * responses written for, return a string stating so
     *
     * Example:
     *  > analyzeColor('blue') // returns "blue is the color of the sky"
     *  > analyzeColor('red') // returns "Strawberries are red"
     *
     *
     *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
     *
     * You should use an if-else-if-else block to return different messages.
     *
     * Test your function by passing various string literals to it and
     * console.logging the function's return value
     */

    // const analyzeColor = (color) => {
    //     if (color === "blue") {
    //         return "The sky is blue!";
    //     } else if (color === "red") {
    //         return "Strawberries are red!";
    //     } else if (color === "orange") {
    //         return "Oranges are Orange!";
    //     } else if (color === "yellow") {
    //         return "Banana's are yellow!";
    //     } else if (color === "green") {
    //         return "Tree's are green!";
    //     } else if (color === "indigo") {
    //         return "Indigo is indigo!";
    //     } else if (color === "violet") {
    //         return "Violets are violet!";
    //     } else {
    //         return `Sorry I don't know the ${color} color!`;
    //     }
    // }
    //
    // console.log(analyzeColor("cyan"));


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
    let colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    /**
     * TODO:
     * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
     * You should see a different message every time you refresh the page
     */

    // console.log(analyzeColor(randomColor));

    /**
     * TODO:
     * Comment out the code above, and refactor your function to use a switch-case statement
     */


    const analyzeColor = (color) => {

        switch (color) {
            case "blue":
                return "The sky is blue!";
            case "red":
                return "Strawberries are red!";
            default:
                return `I am sorry, I do not know about ${color}`;
        }
    }


    /**
     * TODO:
     * Prompt the user for a color when the page loads, and pass the input from the
     * user to your `analyzeColor` function. Alert the return value from your
     * function to show it to the user.
     */

    let userColorPrompt = prompt("What is your favorite color?");
    alert(analyzeColor(userColorPrompt.toLowerCase()));

    /* ########################################################################## */

    /**
     * TODO:
     * Suppose there's a promotion in Walmart, each customer is given a randomly
     * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
     * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
     * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
     * everything for free!.
     *
     * Write a function named `calculateTotal` which accepts a lucky number and total
     * amount, and returns the discounted price.
     *
     * Example:
     * calculateTotal(0, 100) // returns 100
     * calculateTotal(4, 100) // returns 50
     * calculateTotal(5, 100) // returns 0
     *
     * Test your function by passing it various values and checking for the expected
     * return value.
     */

    const calculateTotal = (luckyNumber, price) => {

        if (luckyNumber === 0) {
            return `Lucky number:${luckyNumber}! No discount applied :( Total Price:$${price}`;
        } else if (luckyNumber === 1) {

            let discount = .10 * price;
            let total = price - discount;
            return `Lucky number:${luckyNumber}! Discount:${discount} Total Price:$${total}`;

        } else if (luckyNumber === 2) {

            let discount = .25 * price;
            let total = price - discount;
            return `Lucky number:${luckyNumber}! Discount:${discount} Total Price:$${total}`;

        } else if (luckyNumber === 3) {

            let discount = .35 * price;
            let total = price - discount;
            return `Lucky number:${luckyNumber}! Discount:${discount} Total Price:$${total}`;

        } else if (luckyNumber === 4) {

            let discount = .50 * price;
            let total = price - discount;
            return `Lucky number:${luckyNumber}! Discount:${discount} Total Price:$${total}`;

        } else {
            let total = price - price;
            return `Lucky number:${luckyNumber}! It's FREE! Total Price:$${total}`;
        }
    }
    // let discountedPrice = calculateTotal(5, 100)
    // console.log(discountedPrice);

    /**
     * TODO:
     * Uncomment the line below to generate a random number between 0 and 5.
     * (In this line of code, 0 is inclusive, and 6 is exclusive)
     * Prompt the user for their total bill, then use your `calculateTotal` function
     * and alerts to display to the user what their lucky number was, what their
     * price before the discount was, and what their price after the discount is.
     */

//Generate a random number between 0 and 6
    var luckyNumber = Math.floor(Math.random() * 6);

    let price = parseFloat(prompt("What is your total bill?"));
    alert(calculateTotal(luckyNumber, price));


    /**
     * TODO:
     * Write some JavaScript that uses a `confirm` dialog to ask the user if they
     * would like to enter a number. If they click 'Ok', prompt the user for a
     * number, then use 3 separate alerts to tell the user:
     *
     * - whether the number is even or odd
     * - what the number plus 100 is
     * - if the number is negative or positive
     *
     * Do *NOT* display any of the above information
     * if the user enters a value that is not of the number data type.
     * Instead, use an alert to inform them of the incorrect input data type.
     *
     *
     * Can you refactor your code to use functions?
     * HINT: The way we prompt for a value could be improved
     */

    let userConfirm = confirm("Would you like to enter a number?");

    const userNumberCalculation = (confirmed) => {
        //Did user confirm?
        if (confirmed) {
            let userNumber = parseInt(prompt("Please enter a number."));
            //Did user enter a integer?
            if (isNumericAndNotNaN(userNumber)) {

                let evenOrOdd = (userNumber % 2 === 0) ? "The number is Even." : "The number is Odd";
                let plusHundred = `Your number +100 is: ${userNumber + 100}`;
                let numberType = (userNumber >= 0) ? "The number is a positive number." : "The number is a negative number";
                alert(evenOrOdd);
                alert(plusHundred);
                alert(numberType);
            } else {
                alert("Incorrect data type entered. Please use a number.");
            }
        } else {

        }

    }

    userNumberCalculation(userConfirm);

})();