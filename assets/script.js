var clearEl = document.getElementById("clear-button");
var storage = JSON.parse(localStorage.getItem("search")) || [];
var todayWeather = $('#today');
    

 // hide visiblity 
// $("#forecast").css("visibility", "hidden");


 // Search button click event
 
$("#search-button").on("click", function(event) {

  //make forecast visible after click
  $('#today').css("visibility", "visible");
  $("#forecast-header").css("visibility", "visible");
  $("#forecast").css("visibility", "visible");

  




// capitalize userInput0 name to make sure is in capital varters even if user inputs in lower case
var userInput = $('#search-input').val().toUpperCase()




// My personal API key 

var APIKey = "583d686b6a9be77ec15bfd1ee5c6eaa2";
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;
    
    
event.preventDefault(); // Preventing the submit button from trying to submit the form
$("#today").html("")    // clears the form before submitting another one
// $("#forecast").html("")
  
    
// AJAX call 
   
$.ajax({
url: queryURL,
method: "GET"
}).then(function(response) {
  todayWeather.empty()
  

// variables for weather results 
var celsiusTemperature = Math.floor(response.main.temp - 273.15);
var humidity = response.main.humidity;
var wind = response.wind.speed;



  // prepend current date using moments.js
var CurrentDate = moment().format('Do MMMM YYYY ');


// prepend date and location 

$("#today").prepend("Today is " + " " + " " + CurrentDate + "<br>" + "Current weather for" + "<b>" + " " + userInput + " " + ": " + "<br>");

// get weather icon image

var iconCode = response.weather[0].icon

var imageSource = 'https://openweathermap.org/img/wn/' + iconCode + '@2x.png'
var image = $('<img>')
image.attr('src', imageSource)

// apending results to TODAY element

$("#today").append(image);
$("#today").append("<br>" + "Temperature is :" + " "  + celsiusTemperature + "°C" + "<br>")
$("#today").append("Relative humidity: " + humidity + "%" + "<br>");
$("#today").append("Wind speed: " + wind + " m/s" + "<br>");




// 5 DAY WEATHER FORECAST SECTION

var forecastHeader = $("<p>").text("5 Day Weather Forecast" + " " + "for" + " " + userInput)
$("#forecastheader").append(forecastHeader);

// creating 5 day forecast cards using loop 
for (var i = 0; i < 5; i++) {
  
  var forecastDate = moment().add(i + 1, 'days').format("DD/MM/YYYY");
  var forecastCard = $("<div>")

// forecast contents


  var forecastCardContentIcon = $("<p>").append("icon");
  forecastCard.append(forecastCardContentIcon);

  var forecastCardContentTemp = $("<p>").text("Temp");
  forecastCard.append(forecastCardContentTemp);

  var forecastCardContentHum = $("<p>").text("Humidity");
  forecastCard.append(forecastCardContentHum);

  var forecastCardContentWind = $("<p>").text("WindSpeed");
  forecastCard.append(forecastCardContentWind);
  



  


  forecastCard.addClass('bg-info m-1 p-1 rounded text-center text-dark border border-dark col-lg-2 col-sm-4 col-md-4 col-10 align-items-center text-wrap')
  forecastCard.prepend("<h4>" + forecastDate + " </h4>");
  $("#forecast").append(forecastCard);

  

  // creating content of 5 day forecast cards inside this loop
// temperature 
var forecastTemp = response.main.temp;
// forecastTemp.text(`Temp: ${fcTemp}°C`); 
forecastCard.append(forecastTemp);
}
  
  




// Add results to local storage
localStorage.setItem('history', JSON.stringify(storage));
storage.push(userInput) ;

console.log(storage)
  
    });})




 // Clear storage button

 clearEl.addEventListener("click", function () {
  localStorage.clear();
  storage = [];
  renderstorage();})



  