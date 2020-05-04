class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelslike = document.getElementById('w-feels-like');
    this.visibility = document.getElementById('w-visibility');
    this.wind = document.getElementById('w-wind');
  }
  paint(weather) {
    this.location.textContent = `${weather.name} ,${weather.sys.country}`;
    this.desc.textContent = `${weather.weather[0].description}`;
    let weathertemp = '';
     weathertemp = Math.round(weather.main.temp - 273.15);
    this.string.textContent = `${weathertemp} F`;
    //this.icon.setAttribute('src', weather.weather[0].icon);
    this.humidity.textContent = `Relative Humidity : ${weather.main.humidity}  `;
    this.feelslike.textContent = `Relative Feels-like : ${weather.main.feels_like}  `;

    this.visibility.textContent = `Relative Visibility : ${weather.visibility}  `;
    this.wind.textContent = `Relative Wind : ${weather.wind.speed}  `;
  }
}
