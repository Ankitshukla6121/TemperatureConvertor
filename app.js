function convertToCelsius() {
    let fahrenheitInput = document.getElementById("fahrenheitInput").value;
    if (fahrenheitInput === "") return;
    
    let fahrenheit = parseFloat(fahrenheitInput);
    let celsius = (fahrenheit - 32) * (5/9);
    document.getElementById("celsiusInput").value = celsius.toFixed(2);
}

function convertToFahrenheit() {
    let celsiusInput = document.getElementById("celsiusInput").value;
    if (celsiusInput === "") return;
    
    let celsius = parseFloat(celsiusInput);
    let fahrenheit = (celsius * (9/5)) + 32;
    document.getElementById("fahrenheitInput").value = fahrenheit.toFixed(2);
}
