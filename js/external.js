"use strict";

console.log(`Hello from external JavaScript`);

alert('Welcome to my Website!');

let userColor = prompt("What is your favorite color?");
alert(`${userColor} is my favorite color as well!`);

//movie problem
let dailyRentRate = prompt("How much is the daily rental rate per movie?");
let rentalDaysPromptMermaid = prompt("How many days have you rented The Little Mermaid?");
let rentalDaysMermaid = parseFloat(rentalDaysPromptMermaid);
let rentalDaysPromptBear = prompt("How many days have you rented Brother Bear?");
let rentalDaysBear = parseFloat(rentalDaysPromptBear);
let rentalDaysPromptHercules = prompt("How many days have you rented Hercules?");
let rentalDaysHercules = parseFloat(rentalDaysPromptHercules);
let totalRentPay = dailyRentRate * (rentalDaysBear + rentalDaysHercules + rentalDaysMermaid);

alert(`You owe a total of $${totalRentPay} for the movies rented.`)

//weekly pay problem
let googlePayRate = parseFloat(prompt(`How much do you make an hour at Google?`));
let googleHours = parseFloat(prompt(`How many hours have you worked at Google?`));
let totalGooglePay = googlePayRate * googleHours;

let amazonPayRate = parseFloat(prompt(`How much do you make an hour at Amazon?`));
let amazonHours = parseFloat(prompt(`How many hours have you worked at Amazon?`));
let totalAmazonPay = amazonPayRate * amazonHours;

let facebookPayRate = parseFloat(prompt(`How much do you make an hour at Facebook?`));
let facebookHours = parseFloat(prompt(`How many hours have you worked at Facebook?`));
let totalFacebookPay = facebookPayRate * facebookHours;

let totalPay = totalFacebookPay + totalGooglePay + totalAmazonPay;

alert(`You have earned $${totalPay} for all your hard work.`);

//class enrollment problem
let isClassFull = confirm(`Is the class full?`);
let isScheduleConflict = confirm(`Is there a schedule conflict?`);
let isEnrolled = !isClassFull && !isScheduleConflict;
if (isEnrolled) {
    alert(`You are enrolled`);
} else {
    alert(`You are not enrolled`);
}

//product offer problem
let itemsBought = parseInt(prompt("how many items did you buy?"));
let minimumCartSize = 2;
let enoughItems = minimumCartSize <= itemsBought;
let premiumMember = confirm(`Are you a premium member?`);
let offerValid = confirm(`Is the offer still valid?`);

if ((enoughItems || premiumMember) && offerValid) {
        alert(`Purchase successful!`);
    } else {
        alert(`I'm sorry you do not qualify the offer.`);
}