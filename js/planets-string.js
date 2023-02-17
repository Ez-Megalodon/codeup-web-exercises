(function(){
    "use strict";

    let planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    let planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    let newPlanetsArray = planetsArray.join("<br>");
    console.log(newPlanetsArray);

    const arrayToUnorderedList = (array) => {
        let listedArray = array.join("</li><li>");
        let first = "<ul><li>" + listedArray;
        return first + "</li></ul>";
    }

    console.log(arrayToUnorderedList(planetsArray));

    // const frontPlanetsList = planetsArray.map(planet => planet + "</li>");
    // const backPlanetsList = frontPlanetsList.map(planet => "<li>" + planet);
    // const startPlanetsList = backPlanetsList.unshift("<ul><li>");
    // const planetList = startPlanetsList.push();
    //
    // console.log(planetList);

})();