//TODO GIVEN a weather dashboard with form inputs
//TODO WHEN I search for a city
//TODO THEN I am presented with current and future conditions for that city and that city is added to the search history



//TODO WHEN I view current weather conditions for that city
//TODO THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index




//TODO WHEN I view the UV index
//TODO THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe



//TODO WHEN I view future weather conditions for that city
//TODO THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity



//TODO WHEN I click on a city in the search history
//TODO THEN I am again presented with current and future conditions for that city

let APIKey = "8a1a83896610616dfd6f338bc91b14a2";
let apiURL = "https://api.openweathermap.org";
let button = $(".btn-primary");
let cityName = $("#cityName");
let date = $("#Date");
let temp = $("#Temperature");
let wind = $("#windSpeed");
let uvIndex = $("#uvIndex");
let userInput = $("#userInput");
let history = [];
let weatherDiv = $("#weatherDiv")


function getApi(event) {
    event.preventDefault();
    console.log("click");
    
    
    let requestUrl = `${apiURL}/geo/1.0/direct?q=${userInput.val()}&units=imperial&appid=${APIKey}`;
    console.log(userInput.val());
    fetch(requestUrl)
        .then((response) => response.json())
        .then((weather) => { 
            console.log(weather[0])
            oneCall(weather[0].lat, weather[0].lon)})
};
button.on("click", getApi)



function oneCall(lat, lon) {
     let oneCallURL = `${apiURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
    console.log(oneCallURL);
     fetch(oneCallURL)

     .then((response) => response.json())
     .then ((data) => {
         console.log(data);
        let location = userInput.val()
        let temp = data.current.temp
        let UV = data.current.uvi
        let windSpeed = data.current.wind_speed
        let humidity = data.current.humidity

        let weatherSection = document.createElement("div")

        let locationEl = document.createElement("p")
        let tempEl = document.createElement("p")
        let UVEl = document.createElement("p")
        let windSpeedEl = document.createElement("p")
        let humidityEl = document.createElement("p")

        locationEl.innerHTML = `Location: ${location}`
        tempEl.innerHTML = `temp: ${temp} F`
        UVEl.textContent = `uv: ${UV}`
        windSpeedEl.textContent = `wind_speed: ${windSpeed}`
        humidityEl.innerHTML = `humidity: ${humidity}`

        weatherSection.append(locationEl, tempEl, UVEl, windSpeedEl, humidityEl)
        weatherDiv.append(weatherSection)
        weatherDiv.innerHTML = ""

        // $("#location").append(userInput.val())
        // $("#icon").append(data.current.weather[0].icon)
        // $("#currentTemp").append(tempEl);
        // $("#currentUVI").append(UVEl);
        // $("#currentWind").append(windSpeedEl);
        

        console.log(data.current.temp);
         console.log(data.current.uvi);
         console.log(data.current.wind_speed);
        console.log(data.daily[0].temp.day);
        console.log(data.daily[0].uvi);
        console.log(data.daily[0].wind_speed);


        //*Day One Append
        cityNameOne.append(userInput.val())
        tempOne.append(data.daily[0].temp.day)
        humidityOne.append(data.daily[0].humidity)
        windSpeedOne.append(data.daily[0].wind_speed)
        uvIndexOne.append(data.daily[0].uvi)

        //*Day Two
        cityNameTwo.append(userInput.val())
        tempTwo.append(data.daily[1].temp.day)
        humidityTwo.append(data.daily[1].humidity)
        windSpeedTwo.append(data.daily[1].wind_speed)
        uvIndexTwo.append(data.daily[1].uvi)


        //*Day Three
        cityNameThree.append(userInput.val())
        humidityThree.append(data.daily[2].humidity)
        tempThree.append(data.daily[2].temp.day)
        humidityOne.append(data.daily[0].humidity)
        windSpeedThree.append(data.daily[2].wind_speed)
        uvIndexThree.append(data.daily[2].uvi)


        //*Day Four
        cityNameFour.append(userInput.val())
        humidityFour.append(data.daily[3].humidity)
        tempFour.append(data.daily[3].temp.day)
        windSpeedFour.append(data.daily[3].wind_speed)
        uvIndexFour.append(data.daily[3].uvi)


        //*Day Five
        cityNameFive.append(userInput.val())
        humidityFive.append(data.daily[4].humidity)
        tempFive.append(data.daily[4].temp.day)
        windSpeedFive.append(data.daily[4].wind_speed)
        uvIndexFive.append(data.daily[4].uvi)

        })
}



function fiveCall(lat, lon) {
    let fiveDayCall = `${apiURL}/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`
    console.log(fiveDayCall);
    fetch(fiveDayCall)

    .then((response) => response.json())
     .then ((data) => {
         console.log(data);
        
         let location = userInput.val()
      
         let UV = data.daily[0].uvi
         let windSpeed = data.daily[0].wind_speed

         let futureWeatherOne = document.createElement("div")

        let locationOneEl = document.createElement("p")
        let tempOneEl = document.createElement("p")
        let UVOneEl = document.createElement("p")
        let windSpeedOneEl = document.createElement("p")

        $("#cityNameOne") = `Location: ${location}`
        tempOneEl.innerHTML = `temp: ${temp} F`
        UVOneEl.textContent = `uv: ${UV}`
        windSpeedOneEl.textContent = `wind_speed: ${windSpeed}`

        futureWeatherOne.append(locationOneEl, tempOneEl, UVOneEl, windSpeedOneEl)
        dayOne.append(futureWeatherOne)
        dayOne.innerHTML = ""


     })
}