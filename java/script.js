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


        $("#location").append(userInput.val())
        $("#currentTemp").append(data.current.temp);
        $("#currentUVI").append(data.current.uvi);
        $("#currentWind").append(data.current.wind_speed);
         console.log(data.current.temp);
         console.log(data.current.uvi);
         console.log(data.current.wind_speed);
        
     
     
     
        })
}



// function fiveCall() {
//     let fiveDayCall = `$`
// }