var APIKey = "583d686b6a9be77ec15bfd1ee5c6eaa2";

var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + userInput + "&appid=" + APIKey;




$("#search-button").on("click", function(event) {


    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
  
    // Here we grab the text from the input box
    var movie = $("#movie-input").val();
  
    // Here we construct our URL
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    
  
    // Write code between the dashes below to hit the queryURL with $ajax and take the response data
   
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      
      // Create and save a reference to new empty table div
     
      $("#movie-view").text(JSON.stringify(response));
    });})


  