// /*
//     TODO: Using separation of concern principles, module syntax, and async/await, create a series of code that:
//     - uses star wars API:
//     - console logs a specific planet
//     - console logs the eye color of a specific character
//     - returns all of the data on a specific movie
//     *BONUS* - Add it onto the DOM however you want
//
// */

import {getPlanets, getPerson, getEyeColor, getFilm, renderInfo} from "./star-wars.js";
import {randomNumber} from "./utils.js";

(async ()=>{
    //randomize planet and person and film
    let randomPerson = randomNumber(0,60);
    let randomPlanet = randomNumber(0,60);
    let randomFilm = randomNumber(1,6);
    console.log(randomPerson);
    console.log(randomPlanet);
    console.log(randomFilm);
    //get planet
    let planet = await getPlanets(randomPlanet);
    console.log(planet);
    //get person
    let person = await getPerson(randomPerson);
    console.log(person);
    //get film
    let film = await getFilm(randomFilm);
    console.log(film);
    //get eye color
    await getEyeColor(person);
    //target parent for div element
    const starWarsGrid = document.querySelector('#starWarsGrid');
    // render info
    renderInfo(person, planet, film, starWarsGrid);


})();