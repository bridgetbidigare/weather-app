let apiKey = "75c66def1228b9939b902b974cffcda2";
let unit = "imperial";
let city = "Chicago";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

function showTemp(response) {
  let temperature = document.querySelector("#degree-temp");
  let geoLocCity = document.querySelector("h2");
  let windSpeed = document.querySelector("#windSpeed");
  let weatherDescription = document.querySelector("#weatherDescription");
  let weatherImage = document.querySelector("#weatherImage");
  let spotify = document.querySelector("#spotifyPlayer");
  let musicText = document.querySelector("#musicText");
  fahrenheitTemp = response.data.main.temp;
  temperature.innerHTML = Math.round(fahrenheitTemp);
  geoLocCity.innerHTML = response.data.name;
  windSpeed.innerHTML = Math.round(response.data.wind.speed);
  weatherDescription.innerHTML = response.data.weather[0].description;
  if (response.data.weather[0].main === "Clear" && response.data.weather[0].icon === "01n") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/028/original/moon.png?1636948953")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/7Hx5FQvtc1LT8V50jJOTgP?utm_source=generator")
    musicText.innerHTML = "🌚 for clear nights..."
  };
  if (response.data.weather[0].main === "Clear" && response.data.weather[0].icon === "01d") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/033/original/sunny.png?1636949659")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/2KZp84UHWnlZ0CuxcbTq5R?utm_source=generator")
    musicText.innerHTML = "🌱 for sunny days..."
  };
  if (response.data.weather[0].main === "Clouds" && response.data.weather[0].icon === "02d") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/035/original/suncloud.png?1636949700")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/2KZp84UHWnlZ0CuxcbTq5R?utm_source=generator")
    musicText.innerHTML = "🌱 for sunny days..."
  };
  if (response.data.weather[0].main === "Clouds") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/032/original/cloudy.png?1636949651")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌫 for when it's gloomy out..."
  };
  if (response.data.weather[0].main === "Fog") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/032/original/cloudy.png?1636949651")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌫 for when it's gloomy out..."
  };
  if (response.data.weather[0].main === "Mist") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/032/original/cloudy.png?1636949651")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌫 for when it's gloomy out..."
  };
  if (response.data.weather[0].main === "Smoke") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/032/original/cloudy.png?1636949651")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌫 for when it's gloomy out..."
  };
  if (response.data.weather[0].main === "Haze") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/032/original/cloudy.png?1636949651")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌫 for when it's gloomy out..."
  };
  if (response.data.weather[0].main === "Rain") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/029/original/rainy.png?1636949596")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0deTdXGmrLsQz3NfjYnPHj?utm_source=generator")
    musicText.innerHTML = "☔️ for when it's rainy..."
  };
  if (response.data.weather[0].main === "Thunderstorm") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/030/original/stormy.png?1636949603")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0deTdXGmrLsQz3NfjYnPHj?utm_source=generator")
    musicText.innerHTML = "☔️ for when it's rainy..."
  };
  if (response.data.weather[0].main === "Snow") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/034/original/snowy.png?1636949679")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/5BA304KsTNJMk408bSgr5c?utm_source=generator")
    musicText.innerHTML = "☃️ for when it's snowing..."
  };
  if (response.data.weather[0].main === "Tornado") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/037/original/tornado.png?1636951510")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌫 for when it's gloomy out..."
  }
  if (response.data.wind.speed > 24 && response.data.weather[0].main === "Clouds") {
    weatherImage.setAttribute("src", "https://s3.amazonaws.com/shecodesio-production/uploads/files/000/021/031/original/windy.png?1636949640")
    spotify.setAttribute("src", "https://open.spotify.com/embed/playlist/0PD2Rz22lB12jSHWcVRAX0?utm_source=generator")
    musicText.innerHTML = "🌬 for when it's gloomy out..."
  }
}

axios.get(apiUrl).then(showTemp);

let now = new Date();

function formatDate() {
  let currentDate = document.querySelector("#date");
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  let day = days[now.getDay()];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  let month = months[now.getMonth()];

  let date = now.getDate();
  let year = now.getFullYear();
  currentDate.innerHTML = `${day}, ${month} ${date}, ${year}`;
  return `${day}, ${month} ${date}, ${year}`;
}

function formatTime() {
  let currentTime = document.querySelector("#time");
  let hour = now.getHours();
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  hours = ((hour + 11) % 12 + 1);
  if (hour > 11) {
    currentTime.innerHTML = `${hours}:${minutes}PM`
  } else {
    currentTime.innerHTML = `${hour}:${minutes}AM`
  }
}

function searchCity(event) {
  event.preventDefault();
  let cities = document.querySelector("#city-search");
  let h2 = document.querySelector("h2");
  let searchUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cities.value}&appid=${apiKey}&units=${unit}`;
  h2.innerHTML = cities.value
  axios.get(searchUrl).then(showTemp);
}

let cityInput = document.querySelector("#search-bar");
cityInput.addEventListener("submit", searchCity);

function showPosition(position) {
  let temp = document.querySelector("#degree-temp");
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let geoLocUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${unit}`;
  axios.get(geoLocUrl).then(showTemp);
}

function getPosition(position) {
  navigator.geolocation.getCurrentPosition(showPosition);
}

let locationButton = document.querySelector("#location-button");
locationButton.addEventListener("click", getPosition);

function convertTempC(event) {
  event.preventDefault();
  let temp = document.querySelector("#degree-temp");
  let degreef = document.querySelector("#degree-symbol");
  let tempf = temp.innerHTML;
  tempf = Number(tempf);
  temp.innerHTML = Math.round(((fahrenheitTemp - 32) * 5) / 9);
  degreef.innerHTML = "°C";
  celsius.innerHTML = "°F";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertTempC);

let fahrenheitTemp = null;

formatDate();
formatTime();