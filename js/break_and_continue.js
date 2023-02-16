let userNumber;

while (true) {
    userNumber = parseInt(prompt("Please enter an odd number between 1 and 50"));
    if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
        break;
    }
}

console.log(`Number to skip is: ${userNumber}`);

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 1) {
        if (i === userNumber) {
            console.log(`Yikes! Skipping number ${userNumber}`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
}