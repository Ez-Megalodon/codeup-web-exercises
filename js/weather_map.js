//CURRENT CITY ARRAY
let currentCityArr = [-98.495141 , 29.4246];//default coords (San Antonio, TX)
// CREATE A VARIABLE TO HOLD THE  PREVIOUS MARKER
let previousMarker = null;

// TARGET ROW TO INSERT FORECAST CARDS
let forecastRow = document.querySelector('#forecast-row');
let forecastCard = '';

//LOAD DEFAULT CITY ON PAGE LOAD
window.addEventListener('load', async function(){
    geocodeNew(currentCityArr);
});

//MAPBOX GL JS
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

// SET MARKER ON MAP CLICK
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
    //reset and push new coords to update the API fetch
    currentCityArr = [];
    currentCityArr.push(longitude);
    currentCityArr.push(latitude);

    //update displayed weather cards
    await setCurrentWeather(longitude,latitude);
    await setFiveDayCurrent(longitude,latitude);
});

//ACCORDION ANIMATION FUNCTIONALITY
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        //target accordion-content
        const accordionContent = button.nextElementSibling;
        //add toggle to classList
        button.classList.toggle('accordion-button-active');
        if (button.classList.contains('accordion-button-active')) {
            //if class is toggled then allow accordion content to have as much height as needed
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            //if class is not toggled then set max height to 0
            accordionContent.style.maxHeight = 0;
        }
    })
})