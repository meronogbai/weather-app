function celsiustoFahrenheit(degree) {
  return Math.round(1.8 * degree + 32);
}

function fahrenheitToCelsius(degree) {
  return Math.round((degree - 32) / 1.8);
}

function addDegreeToggler(content) {
  const degreeToggle = document.createElement('button');
  degreeToggle.classList = 'btn btn-success';
  degreeToggle.textContent = 'Convert to Fahrenheit';
  degreeToggle.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const number = Number(temp.textContent.slice(0, -2));
    const unit = temp.textContent.slice(-1);
    if (unit === 'C') {
      temp.textContent = `${celsiustoFahrenheit(number)}°F`;
      degreeToggle.textContent = 'Convert to Celsius';
    } else {
      temp.textContent = `${fahrenheitToCelsius(number)}°C`;
      degreeToggle.textContent = 'Convert to Fahrenheit';
    }
  });
  content.appendChild(degreeToggle);
}

export function displayLoadingGif(content) {
  if (document.querySelector('#loading')) {
    return null;
  }
  const loading = document.createElement('img');
  loading.src = 'https://i.gifer.com/ZZ5H.gif';
  loading.id = 'loading';
  content.appendChild(loading);
  return true;
}

export function displayWeather(data, content) {
  const location = document.createElement('p');
  location.textContent = `${data.city}, ${data.country}`;
  location.setAttribute('id', 'location');
  const temp = document.createElement('p');
  temp.setAttribute('id', 'temp');
  temp.textContent = `${data.temp}°C`;
  const weatherInfo = document.createElement('div');
  weatherInfo.setAttribute('id', 'weatherInfo');
  weatherInfo.innerHTML = `
  <img src='http://openweathermap.org/img/wn/${data.weather.icon}@2x.png'>
  <p>${data.weather.description}</p>
  `;
  content.innerHTML = '';
  content.appendChild(location);
  content.appendChild(temp);
  content.appendChild(weatherInfo);
  addDegreeToggler(content);
}

export function displayError(content) {
  content.innerHTML = '<p>Please input a valid city.</p>';
}