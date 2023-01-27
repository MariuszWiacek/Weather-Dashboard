



$("#search-button").on("click", function(event) {
  var userInput = $('#search-input').val();
  var APIKey = "583d686b6a9be77ec15bfd1ee5c6eaa2";
  var queryUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + userInput + "&appid=" + APIKey;
    // Preventing the submit button from trying to submit the form
    // We're optionally using a form so the user may hit Enter to search instead of clicking the button
    event.preventDefault();
    
    console.log("bla bla bla " + queryUrl);
    // Write code between the dashes below to hit the queryURL with $ajax and take the response data
   
    $.ajax({
      url: queryUrl,
      method: "GET"
    }).then(function(response) {
      
      // Create and save a reference to new empty table div
     
      $("#today").text(JSON.stringify(response));
    });})


  