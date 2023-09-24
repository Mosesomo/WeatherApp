const key = "ec49980bfda0a34aaa296b3bcf2138c6";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

let searchBox = document.querySelector(".search input");
let searchBtn = document.querySelector(".search button");
let weatherImg = document.querySelector(".weather-icon");

async function checkWeather(city){
    const response = await fetch(url + city + `&appid=${key}`);

    if (response.status == 404){
        document.querySelector(".error-msg p").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{
        let data =await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = Math.round(data.wind.speed) + "km/h";

    if (data.weather[0].main == "Clouds"){
        weatherImg.src = "images/clouds.jpg";
    }else if(data.weather[0].main == "Clear"){
        weatherImg.src = "images/sunny.jpg"
    }else if(data.weather[0].main == "Rain"){
        weatherImg.src = "images/rainny.jpg"
    }else if(data.weather[0].main == "Drizzle"){
        weatherImg.src = "images/10.jpg"
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error-msg p").style.display="none"
    }
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
    searchBox.value = "";
})
