export function displayLoadingGif(content) {
  if (document.querySelector('#loading')) {
    return null;
  }
  const loading = document.createElement('img');
  loading.src = '../src/loading.gif';
  loading.id = 'loading';
  content.appendChild(loading);
  return true;
}

export function displayWeather(data, content) {
  const location = document.createElement('p');
  location.textContent = `${data.city}, ${data.country}`;
  const temp = document.createElement('p');
  temp.textContent = `${data.temp}K`;
  const icon = document.createElement('div');
  icon.innerHTML = `
    <img src='http://openweathermap.org/img/wn/${data.weather.icon}@2x.png'>
    <p>${data.weather.description}</p>
  `;
  content.innerHTML = '';
  content.appendChild(location);
  content.appendChild(temp);
  content.appendChild(icon);
}

export function displayError(content) {
  content.innerHTML = '<p>Please input a valid city.</p>';
}