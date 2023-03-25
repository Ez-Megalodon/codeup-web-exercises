//PLAN
//1- FETCH API'S, ORGANIZE DATA AND SEND DATA TO APPROPRIATE DIV'S
//2- MAP BOX FUNCTIONALITY, CLICKING ADDS MARKERS AND REMOVES OLD ONES WHEN NEW ONES ARE MADE
//3 - FEED MAP LONG-LAT INTO CURRENT WEATHER/5 DAY FORECAST API AND UPDATE WEATHER CARDS BASED ON CLICKED LOCATION
//4 - DO THE SAME WITH THE SEARCHBOX

let sanAntonio = {long: -98.495141,lat: 29.4246};
let currentCityArr = [-98.495141 , 29.4246];
let currentCityStats = [];
let fiveDayCityStats = [];

// */----------------------INTERACTIVE MAP FUNCTIONS-----------------------\*
//MAP ITSELF
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
    center: [sanAntonio.long, sanAntonio.lat], // starting position [lng, lat]
    zoom: 9, // starting zoom
});


//ZOOM FUNCTIONALITY TO MAPBOX
document.querySelector('#zoomSubmit').addEventListener('click', event => {
    event.preventDefault();
    map.setZoom(document.querySelector('#zoom').value);
});

let markers = [];
let newMarker;

// SET MARKER AND MOVE TO MARKER AFTER SEARCH BOX USED
document.querySelector('#setMarkerButton').addEventListener('click', event => {
    event.preventDefault();
    const address = document.querySelector('#setMarker').value;

    geocode(address, MAPBOX_API_TOKEN).then(async coords => {
    const newMarker = new mapboxgl.Marker()
        .setLngLat(coords)
        .addTo(map)
        .addTo(markers);
        map.setCenter(coords);

        //reset currentCityArr array and push new coordinates for current weather fetches
        currentCityArr = [];
        currentCityArr.push(document.querySelector('#setMarker').value);
        currentCityArr.push(coords[0]);
        currentCityArr.push(coords[1]);
        console.log('-----updated current city array with searched city------')
        console.log(currentCityArr);
        await setCurrentWeather();
        await setFiveDayCurrent();
    });
});

// SET MARKER ON CLICK
// document.querySelector('#map').addEventListener('click', event => {
//     const address = document.querySelector('#setMarker').value;
//
//     geocode(address, MAPBOX_API_TOKEN).then(async coords => {
//         const newMarker = new mapboxgl.Marker()
//             .setLngLat(coords)
//             .addTo(map);
//         map.setCenter(coords);
//
//         //reset currentCityArr array and push new coordinates for current weather fetches
//         currentCityArr = [];
//         currentCityArr.push(document.querySelector('#setMarker').value);
//         currentCityArr.push(coords[0]);
//         currentCityArr.push(coords[1]);
//         console.log('-----updated current city array with clicked city------')
//         console.log(currentCityArr);
//         await setCurrentWeather();
//         await setFiveDayCurrent();
//     });
// });

window.addEventListener('load', async function(){
    let address = currentCityArr[0];
    newMarker?.remove();

    geocode(address, MAPBOX_API_TOKEN).then(async coords => {
        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map);
        map.setCenter(coords);
        console.log(coords);
        //reset currentCityArr array and push new coordinates for current weather fetches
        currentCityArr = [];
        currentCityArr.push(document.querySelector('#setMarker').value);
        currentCityArr.push(coords[0]);
        currentCityArr.push(coords[1]);
        console.log('-----loaded default city of San Antonio------')
        console.log(currentCityArr);

        await setCurrentWeather();
        await setFiveDayCurrent();
    });

});



// assign markers and attach info using arrayOfInfo array using forEach
// arrayOfInfo.forEach((e) => {
//     const newMarker = new mapboxgl.Marker()
//         .setLngLat(e.coords)
//         .addTo(map);
//     const newPopup = new mapboxgl.Popup()
//         .setHTML(`<h3>${e.name}</h3><p>${e.bio}</p><p>Address: ${e.address}</p><p>Hours: ${e.hours}</p><p>Phone: ${e.phone}</p>`)
//     newMarker.setPopup(newPopup);
//
    //remove markers button
    // document.querySelector('#removeMarkers').addEventListener('click', event => {
    //     event.preventDefault();
    //     newMarker.remove();
    // })
// });

// create a variable to hold the reference of the previous marker
let previousMarker = null;

// create a new event listener for the map
map.on('click', async function(event) {
    // get the latitude and longitude of the clicked point
    const latitude = event.lngLat.lat;
    const longitude = event.lngLat.lng;

    // remove the previous marker if it exists
    if (previousMarker !== null) {
        previousMarker.remove();
    }

    // create a new marker at the clicked point
    const newMarker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);

    // set the previous marker to the new marker
    previousMarker = newMarker;

    // center the map on the new marker
    map.setCenter([longitude, latitude]);
    currentCityArr = [];
    console.log(longitude);
    currentCityArr.push(longitude);
    console.log(latitude)
    currentCityArr.push(latitude);
    console.log(currentCityArr);
    await setCurrentWeather();
    await setFiveDayCurrent();
});