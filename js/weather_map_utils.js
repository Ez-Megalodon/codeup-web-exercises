
//FETCH 5 DAY WEATHER FORECAST API
async function getFiveDayWeatherData () {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${currentCityArr[1]}&lon=${currentCityArr[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
        let data = await response.json();
        console.log('-----------------five day-------------------');
        console.log(data);
        return data;

    }catch (error){
        console.log(error);
    }
}

//FETCH CURRENT WEATHER DATA
async function getCurrentWeatherData () {
    try {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${currentCityArr[1]}&lon=${currentCityArr[0]}&units=imperial&appid=${OPEN_WEATHER_APPID}`);
        let data = await response.json();
        console.log('----------------current day------------------');
        console.log(data);
        return data;

    }catch (error){
        console.log(error);
    }
}

// set current weather
async function setCurrentWeather () {
    let current = await getCurrentWeatherData();
    //html to create weather card
    document.querySelector('#current-weather-card').innerHTML =
        `   
        <h1>${current.name}</h1>
        <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png" class="current-weather-img" alt="picture depicting the state of the weather.">
        <p>${current.weather[0].description}</p>
        <p>cloud cover: ${current.clouds.all}%</p>
        <p>temperature: ${Math.round(current.main.temp)}&#8457; Feels like: ${Math.round(current.main.feels_like)}&#8457;</p>
        <p>high: ${Math.round(current.main.temp_max)}&#8457;</p>
        <p>low: ${Math.round(current.main.temp_min)}&#8457;</p>
        <p>${Math.round(current.wind.speed)} mph ${getWindDirection(current.wind.deg)}</p>
        `
}

//set 5-day forecast cards
async function setFiveDayCurrent () {
    let forecast = await getFiveDayWeatherData(); // get weather API data
    // loop through object list array to grab only one forecast per day
    forecastRow.innerHTML = '';
    forecast.list.forEach((forecast, index) => {
        if (index % 8 === 0 && index !== 0){
            //html to create forecast cards
            forecastCard = `
                    <div class="column weather-card weather-card-bg text-center align-center justify-center">
                    <h2>${getDayOfWeek(forecast.dt)}</h2>
                    <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" class="forecast-img" alt="picture depicting the state of the weather.">
                    <p>${forecast.weather[0].description}</p>
                    <p>feels like: ${Math.round(forecast.main.feels_like)}&#8457;</p>
                    <p>high: ${Math.round(forecast.main.temp_max)}&#8457; low: ${Math.round(forecast.main.temp_min)}&#8457;</p>
                    <p>${forecast.clouds.all}% Cloud coverage</p>
                    <p>wind: ${Math.floor(forecast.wind.speed)} ${getWindDirection(forecast.wind.deg)}, gusts: ${Math.floor(forecast.wind.gust )} mph</p>
                    </div>
                    `
            forecastRow.innerHTML += forecastCard;
        }
    });
}

// get cardinal wind directions based on angle
function getWindDirection( angle ){
    // divide it into 16 sections
    let directions = ["N","NNE","NE","ENE","E",
        "ESE", "SE", "SSE","S",
        "SSW","SW","WSW","W",
        "WNW","NW","NNW" ];
    //need to divide in order to get the correct section
    // int(x) + 1, but parseInt doesn't care, so we add 0.5 to it
    let section = parseInt( angle/22.5 + 0.5 );
    //need to make sure it's under 16
    section = section % 16;
    return directions[ section ];
}

//GET THE DAY OF THE WEEK
function getDayOfWeek(dt){
    const time = new Date(dt * 1000).getDay();
    let dayOfWeek;
    switch (time){
        case 0:
            dayOfWeek = 'Sunday'
            break;
        case 1:
            dayOfWeek = 'Monday'
            break;
        case 2:
            dayOfWeek = 'Tuesday'
            break;
        case 3:
            dayOfWeek = 'Wednesday'
            break;
        case 4:
            dayOfWeek = 'Thursday'
            break;
        case 5:
            dayOfWeek = 'Friday'
            break;
        default:
            dayOfWeek = 'Saturday'
    }
    return dayOfWeek;
}
// update city array and fetch new weather data based on new coordinates based on event listeners
function geocodeNew(address) {
    geocode(address, MAPBOX_API_TOKEN).then(async coords => {
        // remove the previous marker if it exists
        if (previousMarker !== null) {
            previousMarker.remove();
        }

        const newMarker = new mapboxgl.Marker()
            .setLngLat(coords)
            .addTo(map)
        map.setCenter(coords);

        // set the previous marker to the new marker
        previousMarker = newMarker;

        //reset currentCityArr array and push new coordinates for current search
        currentCityArr = [];
        currentCityArr.push(coords[0]);
        currentCityArr.push(coords[1]);
        console.log('-----updated current city array with searched city------')
        console.log(currentCityArr);
        //update weather coordinates
        await setCurrentWeather(coords[0], coords[1]);
        await setFiveDayCurrent(coords[0], coords[1]);
    });
}