// select HTML elements in the document
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

// Define the URL for the OpenWeatherMap API
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

// Latitude and Longitude coordinates for Trier, Germany
const latitude = 49.75;
const longitude = 6.64;

// Provide your API key
const apiKey = 'f65b05c7aa2daf8f365c416be1f3c4da';

// Define the asynchronous function to fetch weather data from the API
async function apiFetch() {
  try {
    // Construct the query string
    const queryString = `?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    // Fetch data from the API
    const response = await fetch(apiUrl + queryString);

    if (response.ok) {
      // If response is okay, convert response to JSON
      const data = await response.json();
      console.log(data); // Testing only
      displayResults(data); // Display results on HTML page
    } else {
      // If response is not okay, throw an error
      throw Error(await response.text());
    }
  } catch (error) {
    // Catch and log any errors
    console.log(error);
  }
}

// Invoke the apiFetch function
apiFetch();


function displayResults(data) {
    // Get temperature in Kelvin
    const temperatureKelvin = data.main.temp;
    // Convert temperature to Celsius
    const temperatureCelsius = temperatureKelvin - 273.15;
    // Round temperature to two decimal points
    const roundedTemperature = temperatureCelsius.toFixed(2);
  
    // Update HTML with temperature
    currentTemp.innerHTML = `${roundedTemperature}&deg;C`;
  
    // Get weather description and capitalize each word
    const description = data.weather[0].description.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    captionDesc.textContent = description;
  
    // Get weather icon
    const iconCode = data.weather[0].icon;
    const iconSrc = `https://openweathermap.org/img/w/${iconCode}.png`;
    weatherIcon.setAttribute('src', iconSrc);
    weatherIcon.setAttribute('alt', description);
  }
  