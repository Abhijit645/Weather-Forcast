const apiKey = "fda22fed099827f3e9121fe4d750b79f";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".weather").style.display = "none"
        alert("Invalid city name.")
        alert("Please Enter a valid City name")
        setTimeout(() => {
            document.location.reload();
        }, 1000);
    }
    var data = await response.json();
    //console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".Windspeed").innerHTML = data.wind.speed + "Km/hr";
    document.querySelector(".feelslike").innerHTML = data.main.feels_like + "°C";
    document.querySelector(".airpressure").innerHTML = data.main.pressure + "hPa";

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})

