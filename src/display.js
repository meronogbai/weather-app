const celsiustoFahrenheit = (degree) => Math.round(1.8 * degree + 32);

const fahrenheitToCelsius = (degree) => Math.round((degree - 32) / 1.8);

const addDegreeToggler = (content) => {
  const degreeToggle = document.createElement('button');
  degreeToggle.classList = 'btn btn-dark';
  degreeToggle.textContent = 'C to F';
  degreeToggle.addEventListener('click', () => {
    const temp = document.querySelector('#temp');
    const number = Number(temp.textContent.slice(0, -2));
    const unit = temp.textContent.slice(-1);
    if (unit === 'C') {
      temp.textContent = `${celsiustoFahrenheit(number)}°F`;
      degreeToggle.textContent = 'F to C';
    } else {
      temp.textContent = `${fahrenheitToCelsius(number)}°C`;
      degreeToggle.textContent = 'C to F';
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
  content.classList = 'card small-card mx-auto';
  content.innerHTML = `
    <div class='card-header'>
      <img src='https://openweathermap.org/img/wn/${data.weather.icon}@2x.png' width='40'>
      <span class='card-text' id='weatherInfo'>${data.weather.description}</span>
    </div>
    <div class='card-body'>
      <h5 class='card-title' id='location'>${data.city}, ${data.country}</h5>
      <p class='card-text'>Temperature: <span id='temp'>${data.temp}°C</span></p>
    </div>
    `;
  setBackground(data.weather.icon);
  addDegreeToggler(content);
};

export const displayError = (content) => {
  content.innerHTML = '<p>Please input a valid city.</p>';
};