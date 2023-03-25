
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
        <p>${getDayMonthYear(current.dt).month} ${getDayMonthYear(current.dt).date} ${getDayMonthYear(current.dt).year}</p>
        <img src="https://openweathermap.org/img/w/${current.weather[0].icon}.png" class="current-weather-img" alt="picture depicting the state of the weather.">
        <p>${current.weather[0].description}</p>
        <p><img src="https://www.svgrepo.com/show/510932/cloud.svg" alt="cloud icon" class='p-icon'> Cloud cover: ${current.clouds.all}%</p>
        <p><img src="https://www.svgrepo.com/show/432327/temp-high.svg" alt="temperature icon" class='p-icon'> Temperature: ${Math.round(current.main.temp)}&#8457; Feels like: ${Math.round(current.main.feels_like)}&#8457;</p>
        <p><img src="https://www.svgrepo.com/show/470163/up-arrow.svg" alt="up arrow icon" class='p-icon'> High: ${Math.round(current.main.temp_max)}&#8457;</p>
        <p><img src="https://www.svgrepo.com/show/464780/down-arrow.svg" alt="down arrow icon" class='p-icon'> Low: ${Math.round(current.main.temp_min)}&#8457;</p>
        <p><img src="https://www.svgrepo.com/show/497671/wind.svg" alt="wind icon" class='p-icon'> Wind: ${Math.round(current.wind.speed)} mph ${getWindDirection(current.wind.deg)}</p>
        <p><img src="https://www.svgrepo.com/show/436937/sunrise-fill.svg" alt="sunrise icon" class='p-icon'> Sunrise: ${getDayMonthYear(current.sys.sunrise).time}</p>
        <p> <img src="https://www.svgrepo.com/show/436939/sunset-fill.svg" alt="sunset icon" class='p-icon'> Sunset: ${getDayMonthYear(current.sys.sunset).time}</p></p>
        `
}
// <img src="https://www.svgrepo.com/show/510932/cloud.svg" alt="cloud icon" class='p-icon'>

//SET 5-DAY FORECAST CARDS
async function setFiveDayCurrent () {
    let forecast = await getFiveDayWeatherData(); // get weather API data
    // loop through object list array to grab only one forecast per day
    forecastRow.innerHTML = '';
    const highLow = getHighsLows(forecast);
    forecast.list.forEach((forecast, index) => {
        if (index % 8 === 0 && index !== 0){
            //html to create forecast cards
            //used the same math of (index % 8 ===0) to pull the desired properties from getHighLows Function
            forecastCard = `
                    <div class="column weather-card weather-card-bg text-center align-center justify-center">
                    <h2>${getDayMonthYear(forecast.dt).day}</h2>
                    <p>${getDayMonthYear(forecast.dt).month} ${getDayMonthYear(forecast.dt).date} ${getDayMonthYear(forecast.dt).year}</p>
                    <img src="https://openweathermap.org/img/w/${forecast.weather[0].icon}.png" class="forecast-img" alt="picture depicting the state of the weather.">
                    <p>${forecast.weather[0].description}</p>
                    <p>${forecast.clouds.all}% Cloud coverage</p>
                    <p>Wind: ${Math.floor(forecast.wind.speed)} ${getWindDirection(forecast.wind.deg)}, Gusts: ${Math.floor(forecast.wind.gust )} mph</p>
                    <p>Feels like: ${Math.round(forecast.main.feels_like)}&#8457;</p>
                    <p>High: ${Math.round(highLow['day' + (index/8)].high)}&#8457; Low: ${Math.round(highLow['day' + (index/8)].low)}&#8457;</p>
                    </div>
                    `
            forecastRow.innerHTML += forecastCard;
        }
    });
}

//GET THE HIGH AND LOW TEMPERATURE'S FROM EACH DAY
const getHighsLows = (arr) => {
    let hours = [];
    let hours2 = [];
    let hours3 = [];
    let hours4 = [];
    arr.list.forEach((list, i) =>{
        const time = new Date(list.dt * 1000).getHours();
        if (i > 8) {
            if (time >= 3 && time <= 21 && hours.length <= 7) {
                hours.push(list.main.temp_min, list.main.temp_max)
            } else if (time >= 3 && time <= 21 && hours2.length <= 7) {
                hours2.push(list.main.temp_min, list.main.temp_max)
            } else if (time >= 3 && time <= 21 && hours3.length <= 7) {
                hours3.push(list.main.temp_min, list.main.temp_max)
            } else if (time >= 3 && time <= 21 && hours4.length <= 7) {
                hours4.push(list.main.temp_min, list.main.temp_max)
            }
        }
    });
    let highLow = {
        day1: {low: Math.min(...hours), high: Math.max(...hours)},
        day2: {low: Math.min(...hours2), high: Math.max(...hours2)},
        day3: {low: Math.min(...hours3), high: Math.max(...hours3)},
        day4: {low: Math.min(...hours4), high: Math.max(...hours4)}
    };
    console.log('HIGHS AND LOWS');
    console.log(highLow);
    return highLow;
}

// GET CARDINAL WIND DIRECTIONS BASED ON DEGREES FROM API OBJECT
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

// UPDATE CURRENT CITY ARRAY AND FETCH NEW WEATHER DATA BASED ON NEW COORDINATES BASED ON EVENT LISTENERS
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

        //update weather coordinates
        await setCurrentWeather(coords[0], coords[1]);
        await setFiveDayCurrent(coords[0], coords[1]);
    });
}

//GET THE TIME BASED ON OBJECT TIMESTAMP
const getDayMonthYear = (dt) => {
    const time = new Date(dt * 1000);
    const monthsAbb = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const daysAbb = ['Sun','Mon','Tues','Wed','Thur','Fri','Sat'];
    let day = days[time.getDay()];
    let dayABB = daysAbb[time.getDay()];
    let date = time.getDate();
    let month = monthsAbb[time.getMonth()];
    let year = time.getFullYear();
    let getHour = time.getHours();
    let getMin = time.getMinutes();
    let hourMin;
    if (getMin < 10) {
        getMin = '0'+ getMin;
    }
    if (getHour > 12){
        hourMin = getHour - 12 + ':' + getMin +'PM';
    } else {
        hourMin = getHour + ':' + getMin +'AM';
    }
    return {
        day: day,
        dayAbb: dayABB,
        date: date,
        month: month,
        year: year,
        time: hourMin
    }
}