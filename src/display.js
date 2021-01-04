const celsiustoFahrenheit = (degree) => Math.round(1.8 * degree + 32);

const fahrenheitToCelsius = (degree) => Math.round((degree - 32) / 1.8);

const addDegreeToggler = (content) => {
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
};

const setBackground = (icon) => {
  const body = document.querySelector('body');
  if (icon.slice(-1) === 'd') {
    body.classList.add('day');
    body.classList.remove('night');
  } else {
    body.classList.add('night');
    body.classList.remove('day');
  }
};

export const displayLoadingGif = (content) => {
  if (document.querySelector('#loading')) {
    return null;
  }
  content.innerHTML = '';
  const loading = document.createElement('img');
  loading.src = 'https://i.gifer.com/ZZ5H.gif';
  loading.id = 'loading';
  content.appendChild(loading);
  return true;
};

export const displayWeather = (data, content) => {
  const location = document.createElement('p');
  location.textContent = `${data.city}, ${data.country}`;
  location.setAttribute('id', 'location');
  const temp = document.createElement('p');
  temp.setAttribute('id', 'temp');
  temp.textContent = `${data.temp}°C`;
  const weatherInfo = document.createElement('div');
  weatherInfo.setAttribute('id', 'weatherInfo');
  weatherInfo.innerHTML = `
  <img src='https://openweathermap.org/img/wn/${data.weather.icon}@2x.png'>
  <p>${data.weather.description}</p>
  `;
  content.innerHTML = '';
  setBackground(data.weather.icon);
  content.appendChild(location);
  content.appendChild(temp);
  content.appendChild(weatherInfo);
  addDegreeToggler(content);
};

export const displayError = (content) => {
  content.innerHTML = '<p>Please input a valid city.</p>';
};