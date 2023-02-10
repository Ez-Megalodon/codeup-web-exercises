let a = 1;
// a = 1 if
let b = a++;
// a now equals = 2, b = 1 (a++ increments after the expression is ran.)
let c = ++a;
// c = 3 because a has incremented on the previous expression so a = 2 at this point. then the
// pre increment (++a) increments immediately
// what is the value of a, b, and c
// answer is a = 3, b = 1, c = 3
let d = "hello";
let e = false;
d++;
e++;
// d++ would be NaN because a string is not a number. e++ would return as a 1 since false
// is seen as false=0 and true=1.

let perplexed; // perplexed is undefined (no value is assigned)
perplexed + 2;
// it would return as undefined because the letiable "perplexed" was never
// initialized and you cannot add a number to a undefined variable.

// let price = 2.7;
// price.toFixed(2);
// // it would print out as 2.70
//
let price = parseFloat("2.7");
price.toFixed(2);
// it would print out as NaN because it is a string

isNaN(0)
//false
isNaN(1)
//false
isNaN("")
//false
isNaN("string")
//true
isNaN("0")
//false
isNaN("1")
//false
isNaN("3.145")
//false
isNaN(Number.MAX_VALUE)
//false
isNaN(Infinity)
//false
isNaN("true")
//true
isNaN(true)
//false
isNaN("false")
//true
isNaN(false)
//false

// to illustrate why the isNaN() function is needed:
NaN == NaN

!true
//false
!false
//true
!!true
//true
!!false
//false
!!0
//false
!!-0
//false
!!1
//true
!!-1
//true
!!0.1
//true
!!"hello"
//true
!!""
//false
!!''
//false
!!"false"
//true
!!"0"
//true




let sample = `Hello Codeup`;

//Use .length to find the number of characters in the string.
let sampleLength = sample.length;
console.log(sampleLength);

//Try to make the sample string all upper or all lower case.
let sampleLower = sample.toLowerCase();
console.log(sampleLower);
let sampleUpper = sample.toUpperCase();

//Update the variable sample via concatenation so that it contains "Hello Codeup Students".
sampleBetter = `${sample} Students`;
sample += ` Students`;
console.log(sample, sampleBetter);

//Replace "Students" with "Class".
let newSample = sample.replace("Students", "Class");
console.log(newSample);
//Find the index of "c" using .indexOf(). What do you observe?
//there is no lower case c so it would return -1
let indexOfc = sample.indexOf("c");
//there is no lower case c so it would return -1

//Find the index of "C" using .indexOf().
let indexOfC = sample.indexOf("C");
// the index of "C": 6

//Retrieve a substring that contains only the word "Codeup" by using indexOf() and substring().
let sampleSubString = newSample.substring(newSample.indexOf("C"), newSample.indexOf("p")+1);
console.log(sampleSubString);

//movie rental problem
let dailyRentalFee = 3;
let daysRentedMermaid = 3;
let daysRentedBear = 5;
let daysRentedHercules = 1;
let totalDaysRented = daysRentedHercules + daysRentedMermaid + daysRentedBear;
let totalRentalFee = totalDaysRented * dailyRentalFee;

//total you have to pay in rental fees
console.log(`$${totalRentalFee}`);

//weekly pay problem
let googlePayRate = 400;
let amazonPayRate = 380;
let facebookPayRate = 350;
let googleHours = 6;
let amazonHours = 4;
let facebookHours = 10;
let googleTotalPay = googlePayRate * googleHours;
let amazonTotalPay = amazonPayRate * amazonHours;
let facebookTotalPay = facebookPayRate * facebookHours;
let totalWeeklyPay = googleTotalPay + amazonTotalPay + facebookTotalPay;
//total money made for the week
console.log("$" + totalWeeklyPay)

// Enrollment problem
let classFull = false;
let scheduleConflict = false;

if (!classFull && !scheduleConflict) {
    console.log("Enrolled!");
} else {
    console.log("NOT Enrolled.");
}

// Product offer problem
let premiumMember = false;
let moreThanTwoItems = true;
let offerExpired = false;

if ((premiumMember || moreThanTwoItems) && offerExpired) {
    console.log("Sorry the discount cannot be applied.");
} else {
    console.log("Offer applied");
}

// 4
let username = 'codeup';
let password = 'notastrongpassword';

let passwordMinimumChars = password.length >= 5;
let passwordIncludesUsername = password.indexOf(username) >= 0;
let usernameMaxChars = username.length <= 20;
let whiteSpace = username.startsWith(" ") >= 0 && username.endsWith(" ") >= 0 && password.startsWith(" ") >= 0 && password.endsWith(" ") >= 0;
console.log(`The password is at least 5 chars: ${passwordMinimumChars}
The password includes the username: ${passwordIncludesUsername}
The username is more than 20 chars: ${usernameMaxChars}
Does the username or password have a space: ${whiteSpace}`);

