let form = document.getElementById("form");
let input = document.getElementById("cityInput");
let apiKey = "dd1e36d2f0e10bca75133b051b5b3b59";

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  let inputCity = input.value;
  if (inputCity.length > 3) {
    try {
      // anywhere u are waiting for data you put await
      let weatherDetails = await getWeather(inputCity);
      showWeatherDetails(weatherDetails);
      showWeatherDetails();
      // weatherMap();
    } catch {}
  }
});

function getWeather(cityname) {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${apiKey}`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      showWeatherDetails(data);
    });
}

const displayWeatherContainer = document.getElementById(
  "displayWeatherContainer"
);
let map = document.getElementById("map");
const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function showWeatherDetails(ui) {
  displayWeatherContainer.innerHTML = "";
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = monthNames[currentDate.getMonth()];
  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  let timeDate = `${month} ${day}, ${hours}:${minutes}`;
  //   console.log(timeDate);

  let textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");
  let dateCont = document.createElement("div");
  dateCont.classList.add("date");

  let dateParagraph = document.createElement("p");
  dateParagraph.classList.add("timeDate");
  dateParagraph.textContent = timeDate;

  let cityName = document.createElement("span");
  cityName.classList.add("city");
  cityName.textContent = `${ui.name},`;

  let countryName = document.createElement("span");
  countryName.classList.add("city");
  countryName.textContent = ui.sys.country;

  let locationCont = document.createElement("div");
  locationCont.classList.add("location");

  const iconCode = ui.weather[0].icon;
  const iconUrl = `http://openweathermap.org/img/wn/${iconCode}.png`;
  let icon = document.createElement("img");
  icon.classList.add("iconContainer");
  icon.width = 200;
  icon.height = 200;
  icon.src = iconUrl;

  const celsius = Math.floor(ui.main.temp - 273.15);
  const degreeSymbol = "\u00B0";
  const temp = document.createElement("span");
  temp.classList.add("temp");
  temp.textContent = `${celsius}${degreeSymbol}C`;

  const description = document.createElement("div");
  const feelsLikeTemp = Math.floor(ui.main.feels_like - 273.15);
  const feelsLike = document.createElement("span");
  feelsLike.classList.add("description");
  feelsLike.textContent = `Feels Like ${feelsLikeTemp}${degreeSymbol}C.`;

  const weatherdescription = ui.weather[0].description;
  const overcast = document.createElement("span");
  overcast.classList.add("description");
  overcast.textContent = `Description: ${weatherdescription}`;

  // weatherMap(ui);

  dateCont.append(dateParagraph, cityName, countryName);
  locationCont.append(icon, temp);
  description.append(feelsLike, overcast);
  textContainer.append(dateCont, locationCont, description);
  displayWeatherContainer.append(textContainer, map);
}

// function weatherMap(ui) {
//   let coordinate = ui.coord;
//   const lonLat = Object.values(coordinate);

//   let mapOptions = {
//     center: lonLat,
//     zoom: 10,
//   };

//   let map = new L.map("map", mapOptions);
//   let layer = new L.TileLayer(
//     "https://tile.openstreetmap.org/{z}/{x}/{y}.png",
//     {
//       attribution:
//         '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
//     }
//   ).addTo(map);
//   map.addLayer(layer);
// }
showWeatherDetails();
