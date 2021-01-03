import formattedWeatherData from './weather-api';

const apiKey = '3f4751a98d27d8f410e99e9589eaf508';

const form = document.forms[0];

function displayWeather(data) {
  const content = document.getElementById('content');
  content.innerHTML = '';
  const location = document.createElement('p');
  location.textContent = `${data.city}, ${data.country}`;
  const temp = document.createElement('p');
  temp.textContent = `${data.temp}K`;
  content.appendChild(location);
  content.appendChild(temp);
}
form.addEventListener('submit', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  const data = await formattedWeatherData(city, apiKey);
  displayWeather(data);
  form.reset();
});