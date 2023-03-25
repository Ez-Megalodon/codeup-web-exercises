
//default coords (San Antonio, TX)
let currentCityArr = [-98.495141 , 29.4246];
// create a variable to hold the reference of the previous marker
let previousMarker = null;

// target row to insert forecast cards
let forecastRow = document.querySelector('#forecast-row');
let forecastCard = '';

//load default city on page load
window.addEventListener('load', async function(){
    geocodeNew(currentCityArr);
});

// */----------------------INTERACTIVE MAP FUNCTIONS-----------------------\*

//MAP ITSELF
mapboxgl.accessToken = MAPBOX_API_TOKEN;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/satellite-streets-v12', // style URL
    center: [currentCityArr[0], currentCityArr[1]], // starting position [lng, lat]
    zoom: 9, // starting zoom
});

//ADD ZOOM AND COMPASS CONTROLS TO MAP
map.addControl(new mapboxgl.NavigationControl());

// SET MARKER AND MOVE TO MARKER AFTER SEARCH BOX USED
document.querySelector('#search-bar-button').addEventListener('click', event => {
    event.preventDefault();
    const address = document.querySelector('#searchbar').value;
    geocodeNew(address);
    document.querySelector('#searchbar').value = '';
});

// SET MARKER ON CLICK
map.on('click', async function(event) {
    // get the latitude and longitude of the clicked point
    const latitude = event.lngLat.lat;
    const longitude = event.lngLat.lng;

    // remove the previous marker if it exists
    if (previousMarker !== null) {
        previousMarker.remove();
    }

    // create a new marker at the clicked point
    // set the previous marker to the new marker
    previousMarker = new mapboxgl.Marker()
        .setLngLat([longitude, latitude])
        .addTo(map);

    // center the map on the new marker
    map.setCenter([longitude, latitude]);
    currentCityArr = [];
    currentCityArr.push(longitude);
    currentCityArr.push(latitude);

    await setCurrentWeather(longitude,latitude);
    await setFiveDayCurrent(longitude,latitude);
});