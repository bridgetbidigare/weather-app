let apiKey = "75c66def1228b9939b902b974cffcda2";
let unit = "imperial";
let city = "Detroit";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${unit}`;

function showTemp(response) {
  let temperature = document.querySelector("#degree-temp");
  let geoLocCity = document.querySelector("h2");
  temperature.innerHTML = Math.round(response.data.main.temp);
  geoLocCity.innerHTML = response.data.name;
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
  if (hour < 10) {
    hour = `0${hour}`
  }
  if (minutes < 10) {
    minutes = `0${minutes}`
  }
  hours = ((hour + 11) % 12 + 1);
  if (hour > 11) {
    currentTime.innerHTML = `${hours}:${minutes}PM`
  } else {
    currentTime.innerHTML = `${hours}:${minutes}AM`
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
  temp.innerHTML = Math.round(((tempf - 32) * 5) / 9);
  degreef.innerHTML = "°C";
  celsius.innerHTML = "°F";
}

let celsius = document.querySelector("#celsius");
celsius.addEventListener("click", convertTempC);

formatDate();
formatTime();
