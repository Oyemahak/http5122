/**
 * HTTP 5122 Front-End Web Assignment 5
 * Open Weather Map API Implementation
 * for two cities (Toronto and Navsari) using the OpenWeatherMap API.
 */

window.onload = function(){
    // Get DOM elements
    var outputSection = document.getElementById("output");
    var locationElement = document.getElementById("location");
    var temperatureElement = document.getElementById("temperature");
    var conditionsElement = document.getElementById("conditions");
    var iconElement = document.getElementById("icon");
    var humidityElement = document.getElementById("humidity");
    var errorElement = document.getElementById("error");
    
    // API key for OpenWeatherMap as same as Lab Code
    var apiKey = "0ac62d998d55377ef56995022c766cf2";
    
    // Add event listeners to city buttons
    document.getElementById("Toronto").addEventListener("click", function() {
        getWeatherDATA("Toronto");
    });
    
    document.getElementById("Navsari").addEventListener("click", function() {
        getWeatherDATA("Navsari");
    });
    
    // Gets live weather for a city and updates the page
    // city - name like "Toronto" or "Navsari"

    function getWeatherDATA(city) {
        // Show output section
        outputSection.style.display = "block";
        
        // Clear previous error message
        errorElement.textContent = "";
        
        // Construct API URL
        var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";
        
        // Create and send XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.responseType = "json";
        xhr.send();
        
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    // Success - process the data
                    var DATA = xhr.response;
                    
                    // Update DOM with weather data
                    locationElement.textContent = DATA.name;
                    temperatureElement.innerHTML = Math.round(DATA.main.temp) + "&deg;C &#x1F321;";
                    
                    // Format conditions description
                    var conditions = DATA.weather[0].description;
                    conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);
                    conditions = conditions +'.';
                    conditionsElement.textContent = conditions;
                    
                    // Add weather icon with dynamic alt text
                    var iconCode = DATA.weather[0].icon;
                    iconElement.innerHTML = "<img src='https://openweathermap.org/img/wn/" + iconCode + ".png' " +
                                          "alt='" + DATA.weather[0].main + " weather icon'>";
                    
                    // Add humidity data (5th property)
                    humidityElement.textContent = DATA.main.humidity;
                    
                } else {
                    // Handle API error
                    errorElement.textContent = "Error fetching weather data. Please try again later.";
                    console.error("API Error:", xhr.status, xhr.statusText);
                }
            }
        };
        
        // Handle network errors
        xhr.onerror = function() {
            errorElement.textContent = "Network error occurred. Please check your connection.";
        };
    }
};