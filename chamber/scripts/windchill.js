const form = document.getElementById('windchill-form');
const resultDiv = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get temperature and wind speed values from the form
    const temperature = parseFloat(form.elements.temperature.value);
    const windspeed = parseFloat(form.elements.windspeed.value);

    // Check if inputs are valid
    if (isNaN(temperature) || isNaN(windspeed)) {
        resultDiv.textContent = 'Please enter valid numbers for temperature and wind speed.';
        return;
    }

    // Check if inputs meet the specification limits for wind chill calculation
    if (temperature > 50 || windspeed <= 3.0) {
        resultDiv.textContent = 'N/A'; // Not applicable
        return;
    }

    // Calculate wind chill
    const windchill = calculateWindChill(temperature, windspeed);
    resultDiv.textContent = `Wind Chill: ${windchill.toFixed(2)} °F`;
});

function calculateWindChill(temperature, windspeed) {
    return 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windspeed, 0.16) + 0.4275 * temperature * Math.pow(windspeed, 0.16);
}
