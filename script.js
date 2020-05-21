//variables
//==============//


//functions
//==============//
$(document).ready(function() {
    // api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
    // let cityName=$("#cityName").val();
    let apiKey = "7e65904ac5b69e8702d54adbab053bf1";
    
    
    $("#button").on("click", function(){
        let cityName=$("#cityName").val();
        let queryURL="http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid="+apiKey;
        
        console.log(cityName);
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response){
            console.log(response);
            let tempF = (response.main.temp - 273.15) * 1.80 + 32;
            $(".city").html("<h1>" + response.name + " Weather Details</h1>");
            $(".wind").text("Wind Speed: " + response.wind.speed);
            $(".humidity").text("Humidity: " + response.main.humidity);
            $(".temp").text("Temperature (K) " + response.main.temp);
            $(".tempF").text("Temperature (F) " + tempF.toFixed(2));
            let history = JSON.parse(localStorage.getItem("history")) || [];
            if (history.indexOf(cityName) === -1) {

                history.push(cityName);
    
                localStorage.setItem("history", JSON.stringify(history));
    
                //setting variable for latitude and longitude
    
                let lat = response.coord.lat;
                let lon = response.coord.lon;
                let forecast =  "https://api.openweathermap.org/data/2.5/onecall?lat="+lat+"&lon="+lon+"&appid="+apiKey;
                console.log(forecast);
                $.ajax({
                    url: forecast,
                    method: "GET"
                }).then(function(response){
                    console.log(response);
                    for(let i = 1; i<6; i++) {
    
                    }
                });
        }});
    }) 
   
        //use jquery to add html/text to the class/ID used in the html. examples below

        //           // Transfer content to HTML
    
        
        // // Convert the temp to fahrenheit
       

        // // add temp content to html
        

        // // Log the data in the console as well
        console.log("Wind Speed: " + response.wind.speed);
        console.log("Humidity: " + response.main.humidity);
        console.log("Temperature (F): " + tempF);


        //declare to local storage
            



      let history = JSON.parse(window.localStorage.getItem("history")) || [];

});