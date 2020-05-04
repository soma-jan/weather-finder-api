class Weather {
  constructor(city, state) {
    this.apikey = 'b18f04988e3cb5dacff97e38d3fd54b9';
    this.city = city;
    this.state = state;
  }
  async getWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.state}&appid=${this.apikey}`
    );
    //console.log(response);
    const responseData = await response.json();
    return responseData;
  }
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
    //document.getElementById('city').value = city;
    //getWeather();
    //console.log(this.city);
  }
}
