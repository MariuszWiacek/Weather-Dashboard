var clearEl = document.getElementById("clear-button");
var storage = JSON.parse(localStorage.getItem("search")) || [];
var todayWeather = $('#today');
    

 // hide visiblity 
$("#forecast").css("visibility", "hidden");


 // Search button click event
 
$("#search-button").on("click", function(event) {

  //make forecast visible after click
  $('#today').css("visibility", "visible");
  $("#forecast").css("visibility", "visible");
 




// capitalize userInput0 name to make sure is in capital letters even if user inputs in lower case
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



// $("#forecast").append(image);
var day1 = $("<div>")
$(day1).append("<br>" + "Temperature is :" + " "  + celsiusTemperature + "°C" + "<br>")
$(day1).append("Relative humidity: " + humidity + "%" + "<br>");
$(day1).append("Wind speed: " + wind + " m/s" + "<br>");

$("#day2").append("<br>" + "Temperature is :" + " "  + celsiusTemperature + "°C" + "<br>")
$("#day2").append("Relative humidity: " + humidity + "%" + "<br>");
$("#day2").append("Wind speed: " + wind + " m/s" + "<br>");

$("#day3").append("<br>" + "Temperature is :" + " "  + celsiusTemperature + "°C" + "<br>")
$("#day3").append("Relative humidity: " + humidity + "%" + "<br>");
$("#day3").append("Wind speed: " + wind + " m/s" + "<br>");

$("#day4").append("<br>" + "Temperature is :" + " "  + celsiusTemperature + "°C" + "<br>")
$("#day4").append("Relative humidity: " + humidity + "%" + "<br>");
$("#day4").append("Wind speed: " + wind + " m/s" + "<br>");

$("#day5").append("<br>" + "Temperature is :" + " "  + celsiusTemperature + "°C" + "<br>")
$("#day5").append("Relative humidity: " + humidity + "%" + "<br>");
$("#day5").append("Wind speed: " + wind + " m/s" + "<br>");



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



  