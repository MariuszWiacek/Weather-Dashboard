

var clearEl = document.getElementById("clear-button");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];


$("#search-button").on("click", function(event) {
  var userInput = $('#search-input').val();
  var APIKey = "583d686b6a9be77ec15bfd1ee5c6eaa2";
  var queryUrl = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    
    
    console.log("bla bla bla " + queryUrl);
    
    // Write code between the dashes below to hit the queryURL with $ajax and take the response data
   
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      var CurrentDate = moment().format();
      $("#forecast").append("Dzisiaj jest" + " " + " " + CurrentDate)
      


      
     
  
      // var celsiusTemperature = Math.floor(response.main.temp - 273.15);
      // // Create CODE HERE to transfer content to HTML
      // var myTempDiv = $('.temp');
      // myTempDiv.text(celsiusTemperature + " degrees Celsius");
      // var city = response.name;
      // var humidity = response.main.humidity;
      // var wind = response.wind.speed;
      // $('.city').text("Weather for " + city);
      // $('.humidity').text("Relative humidity: " + humidity + "%");
      // $('.wind').text("Wind speed: " + wind + " m/s");
      
      // Create and save a reference to new empty table div
     
      $("#today").append(JSON.stringify(response))


      // 5 day forecast ajax

      // $.ajax({
      //   url: queryUrl,
      //   method: "GET"
      // }).then(function(response) {
      
       
      //   $("#forecast").append(JSON.stringify(response))
    });})

 // Clear History button
 clearEl.addEventListener("click", function () {
  localStorage.clear();
  searchHistory = [];
  renderSearchHistory();
})

  //  weather dashboard with form inputs.
  // * When a user searches for a city they are presented with current and future conditions for that city and that city is added to the search history
  // * When a user views the current weather conditions for that city they are presented with:
  //   * The city name
  //   * The date
  //   * An icon representation of weather conditions
  //   * The temperature
  //   * The humidity
  //   * The wind speed
  // * When a user view future weather conditions for that city they are presented with a 5-day forecast that displays:
  //   * The date
  //   * An icon representation of weather conditions
  //   * The temperature
  //   * The humidity
  // * When a user click on a city in the search history they are again presented with current and future conditions for that city

  