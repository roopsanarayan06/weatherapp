const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY'; // Replace with your API key

function getWeather() {
    const cityInput = document.getElementById("cityInput").value;
    const weatherResult = document.getElementById("weatherResult");

    // Check if the user entered a city
    if (cityInput.trim() === "") {
        alert("Please enter a city");
        return;
    }

    // Make an API call to OpenWeatherMap
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Display the weather information
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const resultText = `Weather in ${cityInput}: ${temperature}°C, ${description}`;
            weatherResult.innerHTML = resultText;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            weatherResult.innerHTML = 'Error fetching weather data';
        });
}
