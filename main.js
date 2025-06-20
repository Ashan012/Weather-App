const appid = "48b19d74e1bdf63f7a93b8ca2ac77569";

const searchBtn = document.getElementById("searchBtn");
const inputVal = document.getElementById("inputVal");
const temprature = document.querySelector(".temprature");
const description = document.querySelector(".description");
const windSpeed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");
const weatherImg = document.getElementById("weatherImg");
const weatherBody = document.querySelector(".weather-body");

const locationNotFound = document.querySelector(".location-not-found");

let waetherDetails = async (city) => {
  let data = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
  );
  let newData = await data.json();
  try {
    locationNotFound.style.display = "none";
    weatherBody.style.display = "flex";
    temprature.innerHTML = `${Math.round(newData.main.temp - 273.6)} °C`;
    description.innerHTML = newData.weather[0].main;
    windSpeed.innerHTML = `${newData.wind.speed} km/h`;
    humidity.innerHTML = `${newData.main.humidity} %`;
    switch (newData.weather[0].main) {
      case "Clouds":
        weatherImg.src = "../img/cloud.png";
        break;
      case "Mist":
        weatherImg.src = "../img/mist.png";
        break;
      case "Rain":
        weatherImg.src = "../img/rain.png";
        break;
      case "Clear":
        weatherImg.src = "../img/clear.png";
        break;
      case "Snow":
        weatherImg.src = "../img/snow.png";
        break;
    }
  } catch (error) {
    weatherBody.style.display = "none";
    locationNotFound.style.display = "flex";
    console.error(error);
  }
};
searchBtn.addEventListener("click", () => {
  waetherDetails(inputVal.value);
});
