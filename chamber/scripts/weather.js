document.addEventListener('DOMContentLoaded', () => {
    const apiKey = 'f65b05c7aa2daf8f365c416be1f3c4da'; 
    const apiUrl = 'https://api.openweathermap.org/data/2.5/';
    const latitude = -23.83266;
    const longitude = -46.81923;
    const currentTemperature = document.getElementById('current-temperature');
    const currentDescription = document.getElementById('current-description');
    const weatherIcon = document.getElementById('weather-icon');
    const forecastContainer = document.getElementById('forecast-container');
    const bannerContainer = document.getElementById('banner-container');

    // Function to fetch weather data
    const fetchWeatherData = (url) => {
        return fetch(url)
            .then(response => response.json())
            .catch(error => {
                console.error('Error fetching weather data:', error);
            });
    };

    // Function to convert temperature from Kelvin to Celsius
    const kelvinToCelsius = (kelvin) => {
        return (kelvin - 273.15).toFixed(1);
    };

    // Fetch current weather
    fetchWeatherData(`${apiUrl}weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(data => {
            const temperatureCelsius = kelvinToCelsius(data.main.temp);
            currentTemperature.textContent = `${temperatureCelsius}°C`;
            currentDescription.textContent = data.weather[0].description;
            const iconCode = data.weather[0].icon;
            const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;
            weatherIcon.setAttribute('src', iconUrl);
        });

    // Create the title "Three-Day Forecast"
    const forecastTitle = document.createElement('h3');
    forecastTitle.textContent = 'Three-Day Forecast :';
    forecastContainer.appendChild(forecastTitle);

    // Fetch 3-day forecast
    fetchWeatherData(`${apiUrl}forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}`)
        .then(data => {
            const forecasts = data.list.filter(entry => entry.dt_txt.includes('12:00:00')); 
            forecasts.slice(0, 3).forEach(forecast => {
                const date = new Date(forecast.dt * 1000);
                const day = date.toLocaleDateString('en-US', { weekday: 'long' });
                const temperature = kelvinToCelsius(forecast.main.temp);
                const description = forecast.weather[0].description;
                const iconCode = forecast.weather[0].icon;
                const iconUrl = `https://openweathermap.org/img/w/${iconCode}.png`;

                const forecastItem = document.createElement('div');
                forecastItem.classList.add('forecast-item');
                forecastItem.innerHTML = `
                    <div>${day}</div>
                    <img src="${iconUrl}" alt="${description}">
                    <div>${temperature}°C</div>
                `;
                forecastContainer.appendChild(forecastItem);
            });
        });
});
