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

let APIKey = "8a1a83896610616dfd6f338bc91b14a2"
let button = $("btn-primary")
let history = [];

function getApi() {
    let requestUrl = "https://api.openweathermap.org/data/2.5/weather?q="
    
    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
    .then(function (weather) {
        console.log(weather);
    
    for (var i = 0; i < weather.length; i++)
    })
};


button.on("click", getApi)



// function getApi() {
//   // fetch request gets a list of all the repos for the node.js organization
//   var requestUrl = 'https://api.github.com/orgs/nodejs/repos';

//   fetch(requestUrl)
//     .then(function (response) {
//       return response.json();
// //     })
//     .then(function (data) {
//       console.log(data)
//       //Loop over the data to generate a table, each table row will have a link to the repo url
//       for (var i = 0; i < data.length; i++) {
//         // Creating elements, tablerow, tabledata, and anchor
//         var createTableRow = document.createElement('tr');
//         var tableData = document.createElement('td');
//         var link = document.createElement('a');

//         // Setting the text of link and the href of the link
//         link.textContent = data[i].html_url;
//         link.href = data[i].html_url;

//         // Appending the link to the tabledata and then appending the tabledata to the tablerow
//         // The tablerow then gets appended to the tablebody
//         tableData.appendChild(link);
//         createTableRow.appendChild(tableData);
//         tableBody.appendChild(createTableRow);
//       }
//     });
// }

// fetchButton.addEventListener('click', getApi);
