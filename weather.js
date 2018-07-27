/*
Last Name: Auvula
First Name : Anvesh Reddy
UTA ID:1001363657
Project Number : 1
Due Date : October 19, 2016
*/


var api_key = "c4f766cd8fbb79be63896390b33665ea";

function sendRequest () {
    var xhr = new XMLHttpRequest();
   // var method = "artist.getinfo";
    var city = encodeURI(document.getElementById("form-input").value);
    xhr.open("GET", "proxy.php?q="+city+"&appid="+api_key+"&format=json", true);
    xhr.setRequestHeader("Accept","application/json");
    xhr.onreadystatechange = function  () {
        if (this.readyState == 4) {
            var json = JSON.parse(this.responseText);
            var str = JSON.stringify(json,undefined,2);
            
            var city = json.name;
            var longitude = json.coord.lon;
            var latitude = json.coord.lat;
            var sunset = new Date(json.sys.sunset*1000);
            var sunrise = new Date(json.sys.sunrise*1000);
            var pressure = json.main.pressure;
            var humidity = json.main.humidity;
            var temperature = Math.round(((json.main.temp)*1.8-459.67)*10)/10;
            var minimumTemperature = Math.round(((json.main.temp_min)*1.8-459.67)*10)/10;
            var maximumTemperature = Math.round(((json.main.temp_max)*1.8-459.67)*10)/10;
            var visibility = json.weather[0].main;
            var clouds = json.clouds.all;
            var id = parseInt(json.weather[0].id);

            document.getElementById("t").setAttribute("border", "1" );
            document.getElementById("city").innerHTML =  "City"  ;
            document.getElementById("city value").innerHTML = city ;
            document.getElementById("coordinates").innerHTML =  "Geo Coordinates"  ;
            document.getElementById("coordinates value").innerHTML = "[ " +latitude+", "+  longitude+" ]" ;
            document.getElementById("sunset").innerHTML =  "Sunset" ;
            document.getElementById("sunset value").innerHTML = sunset ;
            document.getElementById("sunrise").innerHTML =  "Sunrise" ;
            document.getElementById("sunrise value").innerHTML = sunrise ;
            document.getElementById("pressure").innerHTML =  "Pressure";
            document.getElementById("pressure value").innerHTML =  pressure +" hpa ";
            document.getElementById("humidity").innerHTML =  "Humidity";
            document.getElementById("humidity value").innerHTML =  humidity +" % ";
            document.getElementById("temperature").innerHTML =  "Temperature";
            document.getElementById("temperature value").innerHTML =  temperature +" F";
            document.getElementById("minimumTemperature").innerHTML =  "Minimumm Temperature";
            document.getElementById("minimumTemperature value").innerHTML =  minimumTemperature +" F";
            document.getElementById("maximumTemperature").innerHTML =  "Maximum Temperature";
            document.getElementById("maximumTemperature value").innerHTML =  maximumTemperature +" F";
            document.getElementById("visibility").innerHTML =  "Visibility";
            document.getElementById("visibility value").innerHTML =  visibility;
            document.getElementById("clouds").innerHTML =  "Clouds";
            document.getElementById("clouds value").innerHTML =  clouds +"%";

            if((200<=id && id<=531)|| id==906)
            {
            document.getElementById("suggestion").innerHTML = "Expecting "+json.weather[0].description+ ". Better to have an umbrella while going out.";
            }
            else if((600<=id && id<=622)|| id==903)
            {
            document.getElementById("suggestion").innerHTML = "Expecting "+json.weather[0].description+ ". Better to have a coat while going out.";
            }
            else
            {
            document.getElementById("suggestion").innerHTML = ""; 
            }

        }
    };
    xhr.send(null);
}
