const btnSearch = document.querySelector(".search button");
const searchBox = document.querySelector(".search input");

const apiKey = "26b8cbb0d9adea18dddf7d904f759ba9";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    searchBox.value = "";
  } else {
    document.querySelector(".error").style.display = "none";
    const data = await response.json();
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".wind").innerHTML = data.wind.speed + " kmH";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    const imgName =
      data.weather[0].main.slice(0, 1).toLowerCase() +
      data.weather[0].main.slice(1) +
      ".png";
    document.querySelector(".weather-img").src = `images/${imgName}`;

    document.querySelector(".weather").style.display = "block";
    searchBox.value = "";
  }
}

btnSearch.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
