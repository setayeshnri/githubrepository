let apiKey = "d27dc643f410ac056e199e21150ca591";

let now = new Date();

let h3 = document.querySelector("h3");

let hours = now.getHours();
let minutes = now.getMinutes();

let days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

let currentDay = days[now.getDay()];

h3.innerHTML = `${currentDay} ${hours}:${minutes}`;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#searchbox");
  let h2 = document.querySelector("h2");
  h2.innerHTML = searchInput.value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemprature);
}

let form = document.querySelector("#searchform");
form.addEventListener("submit", search);

function showTemprature(response) {
  let temprature = Math.round(response.data.main.temp);
  let tempratureElement = document.querySelector("#temprature");
  let description = document.querySelector("#temperature-description");
  tempratureElement.innerHTML = `${temprature}°C`;
  description.innerHTML = response.data.weather[0].description;
}
