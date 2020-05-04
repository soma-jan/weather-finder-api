const storage = new Storage();
const weatherLocation = storage.getLocationData();
const weather = new Weather(weatherLocation.city, weatherLocation.state);
const ui = new UI();
document.addEventListener('DOMContentLoaded', getWeather);
function getWeather() {
  weather
    .getWeather()
    .then((result) => ui.paint(result))
    .catch((err) => console.log(err));
}
document
  .getElementById('w-change-btn')
  .addEventListener('click', changeLocation);

//console.log(result)
function changeLocation() {
  const city = document.getElementById('city').value;
  const state = document.getElementById('state').value;

  weather.changeLocation(city, state);
  storage.setLocationData(city, state);
  getWeather();
  $('#locModal').modal().hide();
  // weather.getWeather();
}
