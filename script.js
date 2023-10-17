function convertToFahrenheit() {
    const celsiusInput = parseFloat(document.getElementById('celsius').value);
    if (!isNaN(celsiusInput)) {
        const fahrenheit = (celsiusInput * 9 / 5) + 32;
        document.getElementById('result').textContent = fahrenheit.toFixed(2);
    } else {
        alert('Please enter a valid temperature in Celsius.');
    }
}