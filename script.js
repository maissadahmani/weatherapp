const apiKey = "2b7d36bde0798241e4c041594689c16b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".searchBox");
const searchBtn = document.querySelector(".searchBtn");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);
    var data = await response.json();
    if( response.status == "404" ){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";


    }
    else{
        document.querySelector(".error").style.display = "none";
        document.querySelector(".weather-main").innerHTML= data.weather[0].main;
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temparature").innerHTML = Math.round(data.main.temp) + "°c";
    document.querySelector(".temp-max").innerHTML= Math.round(data.main.temp_max) + "°";
    document.querySelector(".temp-min").innerHTML= Math.round(data.main.temp_min)+ "°";
    document.querySelector(".humidity").innerHTML= data.main.humidity + " %";
    document.querySelector(".wind").innerHTML= data.wind.speed + " km/h";
    document.querySelector(".feels-like").innerHTML= Math.round(data.main.feels_like) + "°";
    document.querySelector(".clouds-all").innerHTML= data.clouds.all + " %";

 
    if(data.weather[0].main != null){
      
        let weatherCondition = data.weather[0].main.toLowerCase();
    weatherIcon.src = `${weatherCondition}.png`;
    }
    /*  weatherIcon.src= "images/" + data.weather[0].main +".png";*/
   
    document.querySelector(".weather").style.display = "block";
}
}

searchBtn.addEventListener("click", ()=>{
   
    checkWeather(searchBox.value);
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 13) {
        checkWeather(searchBox.value);
    }
});


