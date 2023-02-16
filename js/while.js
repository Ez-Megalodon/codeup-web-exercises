
// while loop exercise
// let i = 2;
//
// while (i < 65536) {
//     let value = i *= 2;
//     console.log(value);
// }

//Do while loop Exercise
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}
function randomNumber2(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

//How many cones to sell
let conesToSell = randomNumber(50, 100);
console.log(`The amount of cones to sell: ${conesToSell}`);
//sell the cones in the do-while loop
do {
    //how many cones the client wants:
    let conesSold = randomNumber2(1, 5);
    console.log(`Client wants: ${conesSold}`);

    //if statement that determines if more cones can be sold.
   if(conesSold > conesToSell){
       console.log(`Cannot sell ${conesSold}, there are only ${conesToSell} cones left.`);
   } else {
       console.log(`${conesSold} sold.`)
       //subtract the amount of cones sold from the remaining inventory.
       conesToSell -= conesSold;
   }
    console.log(`${conesToSell} cones left.`)

} while (conesToSell > 0);

console.log(`yay i've sold them all!`)