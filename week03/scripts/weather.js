const weatherData = {
    temperatureCelsius: 10,
    conditions: "Cool and windy",
    windSpeedKmh: 8
};

function calculateWindChill(temperature, windSpeed) {
    if (temperature > 10 || windSpeed <= 4.8) {
        return "N/A";
    }

    const windPower = windSpeed ** 0.16;
    const windChill = 13.12 + 0.6215 * temperature - 11.37 * windPower
        + 0.3965 * temperature * windPower;

    return `${windChill.toFixed(1)} °C`;
}

function displayWeather() {
    document.getElementById("temperature").textContent = `${weatherData.temperatureCelsius} °C`;
    document.getElementById("conditions").textContent = weatherData.conditions;
    document.getElementById("wind-speed").textContent = `${weatherData.windSpeedKmh} km/h`;
    const windChillIsValid = weatherData.temperatureCelsius <= 10
        && weatherData.windSpeedKmh > 4.8;
    document.getElementById("wind-chill").textContent = windChillIsValid
        ? calculateWindChill(weatherData.temperatureCelsius, weatherData.windSpeedKmh)
        : "N/A";
}

displayWeather();
