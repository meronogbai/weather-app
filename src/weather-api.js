async function getWeatherData(location, apiKey) {
  const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${apiKey}`;
  const data = await fetch(endpoint);
  const weatherData = await data.json();
  return weatherData;
}

export default async function formattedWeatherData(location, apiKey) {
  const data = await getWeatherData(location, apiKey);
  return {
    temp: data.main.temp,
    city: data.name,
    country: data.sys.country,
    weather: { icon: data.weather[0].icon, description: data.weather[0].description },
  };
}