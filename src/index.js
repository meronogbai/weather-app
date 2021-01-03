const apiKey = '3f4751a98d27d8f410e99e9589eaf508';
async function getWeatherData(location) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
  const data = await fetch(endpoint);
  const weather = await data.json();
  console.log(weather.main.temp);
}
getWeatherData('jeddah');