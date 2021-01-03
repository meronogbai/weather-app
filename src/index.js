import formattedWeatherData from './weather-api';
import { displayLoadingGif, displayWeather } from './display';

const apiKey = '3f4751a98d27d8f410e99e9589eaf508';
const content = document.getElementById('content');
const form = document.forms[0];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  displayLoadingGif(content);
  const data = await formattedWeatherData(city, apiKey);
  displayWeather(data, content);
  form.reset();
});