window.onload = function(){
    var out_location = document.getElementById("location");
    var out_temp = document.getElementById("temperature");
    var out_conditions = document.getElementById("conditions");

    var url = "https://api.openweathermap.org/data/2.5/weather?q=toronto&appid=0ac62d998d55377ef56995022c766cf2&units=metric";

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = "json";
    xhr.send(null);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                var DATA = xhr.response;
                out_location.innerHTML = DATA.name;
                
                // console.log("Location: ", DATA.name);

                var temp = Math.round(DATA.main.temp);
                out_temp.innerHTML = temp + "&deg;C";

                // console.log("Temprature: ", temp + "°C");
                
                var conditions = DATA.weather[0].description;
                conditions = conditions.charAt(0).toUpperCase() + conditions.slice(1);
            
                    conditions = conditions +'.';
                
                out_conditions.innerHTML = conditions;

                // console.log("Conditions: ", conditions);

            } else {
                out_location.innerHTML = "API call unsuccessful";
            }
        }  
    }
};