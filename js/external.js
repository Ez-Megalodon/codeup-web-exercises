"use strict";

console.log(`Hello from external JavaScript`);

let welcomeMessage = alert("Welcome to my Website!");

let userColor = prompt("What is your favorite color?");
alert(`${userColor} is my favorite color as well!`);

//movie problem
let rentalDaysPromptMermaid = prompt("How many days have you rented The Little Mermaid?");
let rentalDaysMermaid = parseFloat(rentalDaysPromptMermaid);
let rentalDaysPromptBear = prompt("How many days have you rented Brother Bear?");
let rentalDaysBear = parseFloat(rentalDaysPromptBear);
let rentalDaysPromptHercules = prompt("How many days have you rented Hercules?");
let rentalDaysHercules = parseFloat(rentalDaysPromptHercules);
let dailyRentRate = prompt("How much is the daily rental rate per movie?");
let totalRentPay = dailyRentRate * (rentalDaysBear + rentalDaysHercules + rentalDaysMermaid);
alert(`You owe a total of $${totalRentPay} for the movies rented.`)

let googlePayRate = parseFloat(prompt(`How much do you make an hour at Google?`));
let googleHours = parseFloat(prompt(`How many hours have you worked at Google?`));

let amazonPayRate = parseFloat(prompt(`How much do you make an hour at Amazon?`));
let amazonHours = parseFloat(prompt(`How many hours have you worked at Amazon?`));

let facebookPayRate = parseFloat(prompt(`How much do you make an hour at Facebook?`));
let facebookHours = parseFloat(prompt(`How many hours have you worked at Facebook?`));

let totalFacebookPay = facebookPayRate * facebookHours;
let totalAmazonPay = amazonPayRate * amazonHours;
let totalGooglePay = googlePayRate * googleHours;
console.log(totalAmazonPay);
console.log(totalGooglePay);
console.log(totalFacebookPay);
let totalPay = totalFacebookPay + totalGooglePay + totalAmazonPay;

alert(`You have earned $${totalPay} for all your hard work.`);

let isClassFull = confirm(`Is the class full?`);
let isScheduleConflict = confirm(`Is there a schedule conflict?`);
let isEnrolled = !isClassFull && !isScheduleConflict;
if (isEnrolled) {
    alert(`You are enrolled`);
} else {
    alert(`You are not enrolled`);
}

let itemsBought = confirm(`Are you buying 2 or more items?`)
let premiumMember = confirm(`Are you a premium member?`);
let offerValid = confirm(`Is the offer still valid?`);

if ((itemsBought|| premiumMember) && offerValid) {
        alert(`Purchase successful!`);
    } else {
        alert(`I'm sorry you do not qualify the offer.`);
}



