import formattedWeatherData from './weather-api';

const apiKey = '3f4751a98d27d8f410e99e9589eaf508';

const form = document.forms[0];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  console.log(await formattedWeatherData(city, apiKey));
  form.reset();
});