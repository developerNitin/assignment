let text = document.querySelector("input");
let btn = document.getElementById("btn");
let weather = document.getElementById("weather");
let loc = document.getElementById("location");
let speed = document.getElementById("speed");
let temp = document.getElementById("temp");
let minmax = document.getElementById("minmax");
let time = document.getElementById("time");
start();
function start() {
  getweather("london");
}
btn.addEventListener("click", (e) => {
  e.preventDefault();
  let input = text.value;
  getweather(input);
  text.value = "";
});
function getweather(input) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=cc7b365cdf72c6b1736b020dc6c87432`
  )
    .then((result) => {
      return result.json();
    })
    .then((data) => {
      let txt = data.weather[0].description;
      weather.innerHTML = txt.charAt(0).toUpperCase() + txt.slice(1);
      txt = data.sys.country;
      loc.innerHTML = input.charAt(0).toUpperCase() + input.slice(1);
      txt = data.wind.speed;
      speed.innerHTML = txt + " kms";
      txt = parseInt(data.main.temp - 273);
      temp.innerHTML = txt + "°";
      txt = parseInt(data.main.temp_min - 273);
      let txt2 = parseInt(data.main.temp_max - 273);
      minmax.innerHTML = "H:" + txt2 + "°" + " L:" + txt + "°";
      txt = new Date(data.dt).toDateString();
      time.innerHTML = txt;
    });
}
