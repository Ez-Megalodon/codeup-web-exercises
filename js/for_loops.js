"use-strict";
//For Loops Exercises
//Exercise 1
//Exercise 2

const showMultiplicationTable = (num) => {
    for (let i = 1; i <= 10; i++) {
        let result = num * i;
        console.log(`${num} x ${i} = ${result}`);
    }
}

showMultiplicationTable(7)

//Exercise 3

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

for (let i = 1; i <= 10; i++) {
    let randomSum = randomNumber(20,200);
    if(randomSum % 2 === 0){
        console.log(`${randomSum} is even`)
    } else {
        console.log(`${randomSum} is odd`);
    }
}

//Exercise 4

for (let i = 1; i <= 9; i++){
    let result = `${i}`.repeat(i);
    console.log(result);
}

//Exercise 5

for (let i = 100; i > 0; i -= 5){
    console.log(i);
}