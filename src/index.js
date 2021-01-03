import formattedWeatherData from './weather-api';

const apiKey = '3f4751a98d27d8f410e99e9589eaf508';
const content = document.getElementById('content');
const form = document.forms[0];

function displayWeather(data, content) {
  const location = document.createElement('p');
  location.textContent = `${data.city}, ${data.country}`;
  const temp = document.createElement('p');
  temp.textContent = `${data.temp}K`;
  content.innerHTML = '';
  content.appendChild(location);
  content.appendChild(temp);
}

function displayLoadingGif(content) {
  if (document.querySelector('#loading')) {
    return null;
  }
  const loading = document.createElement('img');
  loading.src = '../src/loading.gif';
  loading.id = 'loading';
  content.appendChild(loading);
  return true;
}

form.addEventListener('submit', async e => {
  e.preventDefault();
  const city = document.getElementById('city').value;
  displayLoadingGif(content);
  const data = await formattedWeatherData(city, apiKey);
  displayWeather(data, content);
  form.reset();
});