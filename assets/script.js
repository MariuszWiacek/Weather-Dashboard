var clearEl = document.getElementById("clear-button");
var storage = JSON.parse(localStorage.getItem('history')) || [];
var todayWeather = $('#today');
var MyButton = $('#history');
    


function weatherFunction() {
 // Search button click event
 
$("#search-button").on("click", function(event) {

  //make forecast visible after click
  $('#today').css("visibility", "visible");
  $("#forecast-header").css("visibility", "visible");
  $("#forecast").css("visibility", "visible");






// capitalize userInput name to make sure is in capital letters even if user inputs in lower case
var userInput = $('#search-input').val().toUpperCase()


if (!userInput) {
  alert("Wrong! Please choose city name")
};

// My personal API key 

var APIKey = "583d686b6a9be77ec15bfd1ee5c6eaa2";

    
event.preventDefault(); // Preventing the submit button from trying to submit the form
$("#today").html("")    // clears the form before submitting another one
$("#forecast").html("")
$("#forecastheader").html("")
  
    

   
//gets data from first uery url
var queryUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + userInput + "&appid=" + APIKey;

// AJAX call 
$.ajax({
  url: queryUrl,
  method: "GET"
}).then(function (response) {

  
  $("input-group-append").empty();
  var MyButton = $("<button>", "<br>");
  $(".input-group-append").prepend(MyButton);
  MyButton.addClass('historyBtn btn-dark py-2 my-1 rounded');
  MyButton.attr("id", userInput).attr('style','width: 100%;' , 'display: flex')
  MyButton.text(userInput);


// variables for weather results 
var celsiusTemperature  = Math.floor(response.list[0].main.temp - 273.15)
var humidity = (response.list[0].main.humidity)
var wind = (response.list[0].wind.speed).toFixed(1)

  // prepend current date using moments.js
var CurrentDate = moment().format('Do MMMM YYYY ');


// prepend date and location 

$("#today").prepend("Today is " + " " + " " + CurrentDate + "<br>" + "Current weather for" + "<b>" + " " + userInput + " " + ": " + "<br>");

// get weather icon image

var iconCode = response.list[0].weather[0].icon;

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
for (j = 0; j < 5; j++) {

  var imageFor = $("<img>")
  imageFor.attr("src", "https://openweathermap.org/img/wn/" + response.list[j].weather[0].icon + ".png")
 
   // var forecastTemp = 
   var forTemp = (response.list[j].main.temp - 273.15).toFixed(0)
   
   // var forecastHum = 
    
   var forHum = (response.list[j].main.humidity)
   
   
   // var forecastWind 
   var forWind = (response.list[j].wind.speed).toFixed(0)



  
  var forecastDate = moment().add(j + 1, 'days').format("DD/MM/YYYY");
  var forecastCard = $("<p>") 
  forecastCard.addClass('bg-info m-1 p-1 rounded text-center text-dark border-dark col-lg-2 col-sm-4 col-md-4 col-10 align-items-center text-wrap')
  forecastCard.prepend("<h4>" + forecastDate + " </h4>");
  
// FORECAST CARD
  
$("#forecast").append(forecastCard);
forecastCard.append(imageFor);
forecastCard.append("<br>" + "Temp :" + " " + forTemp + "°C" + "<br>")
forecastCard.append("Humidity: " + forHum + "%" + "<br>");
forecastCard.append("Wind speed: " + forWind + " m/s" + "<br>");

}  //end of forecast loop

  // Add results to local storage
localStorage.setItem('history', JSON.stringify(storage));
storage.push(userInput) ;

  
})})
}
weatherFunction()

 // Clear storage button

 clearEl.addEventListener("click", function () {
  localStorage.clear();
  storage = [];
  ;})

  // /button history click event 
// MyButton.on("click", function(event) {
//   event.preventDefault();
//   var buttonInput = ($(this).text());
//   weatherFunction(buttonInput = userInput)


// })