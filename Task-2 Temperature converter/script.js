function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;

    if (unit === 'celsius') {
        // Convert to Fahrenheit
        result = (temperatureInput * 9/5) + 32;
        document.getElementById('result').textContent = `Result: ${temperatureInput} °C = ${result.toFixed(2)} °F`;
    } else if (unit === 'fahrenheit') {
        // Convert to Celsius
        result = (temperatureInput - 32) * 5/9;
        document.getElementById('result').textContent = `Result: ${temperatureInput} °F = ${result.toFixed(2)} °C`;
    }
}
