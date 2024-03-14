// script.js
document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f65b05c7aa2daf8f365c416be1f3c4da'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
    const latitude = -23.83266;
    const longitude = -46.81923;

    const currentTemperature = document.getElementById('current-temperature');
    const currentDescription = document.getElementById('current-description');
    const weatherIcon = document.getElementById('weather-icon');

    fetch(`${apiUrl}?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const temperatureCelsius = (data.main.temp - 273.15).toFixed(1);
            currentTemperature.textContent = `${temperatureCelsius}°C`;
            currentDescription.textContent = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            weatherIcon.setAttribute('src', iconUrl);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});

