// variables
var googleMapsApiKey = "";
var openWeatherApiKey = "http://api.openweathermap.org/data/2.5/air_pollution?lat={lat}&lon={lon}&appid={8686e0fe4732b6b364f3c95d6dfcf09c}";

// variable search area and button
var searchText = document.querySelector("#search-box");
var searchBtn = document.querySelector("#searchButton");
var searchedCities = document.querySelector("#searchedCities");
var cityName = document.querySelector("#city-name");



// variable to hold map container
var mapContainer = document.querySelector(".map-container");
var mapOne = document.querySelector("#map-one");
var mapEl = document.querySelector("#mapone");

// variables to handle maps
// var googleMaps = ;
// var openWeather = ;

// get lat and long


// search button event listener
searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    citySearch(searchText.value);
});
// function for search
function citySearch(searchResults) {
    var airQuality;
    if (searchResults === "Good" || searchResults === "Fair" || searchResults === "Moderate" || searchResults === "Poor" || searchResults === "Very Poor") {
        airQuality = searchResults;
        console.log(searchResults);
        return;
    }
}
// Fetch the air quality
function getQuality(cityName) {
    var apiKeyAir = "8686e0fe4732b6b364f3c95d6dfcf09c";
    var apiUrlAir = "http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKeyAir;
    fetch(apiUrlAir)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            getAirQuality(response);
        });

function getAirQuality(response) {
    // figure out variables and array for this
    // use this as guide
    // var cityName = response.city.name;
    // var getTemp = response.list[0].main.temp;
    // var getWind = response.list[0].wind.speed;
    // var getHumid = response.list[0].main.humidity;
    // city.textContent = cityName;
    // tempEL.textContent = getTemp + "°F";
    // windEl.textContent = getWind + " mph";
    // humidEl.textContent = getHumid + "%";
}

}
