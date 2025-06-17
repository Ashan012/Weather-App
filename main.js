const appid = "48b19d74e1bdf63f7a93b8ca2ac77569";

let api = async () => {
  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${appid}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
};
api();
