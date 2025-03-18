function convertTemperature(value, unit) {
    switch (unit.toLowerCase()) {
        case "c":
            if (value >= 0 && value <= 100) {
                let fahrenheit = (value * 9/5) + 32;
                console.log(`${value}°C = ${fahrenheit.toFixed(2)}°F`);
            } else {
                console.log("Enter a temperature between 0°C and 100°C.");
            }
            break;
        case "f":
            if (value >= 32 && value <= 212) {
                let celsius = (value - 32) * 5/9;
                console.log(`${value}°F = ${celsius.toFixed(2)}°C`);
            } else {
                console.log("Enter a temperature between 32°F and 212°F.");
            }
            break;
        default:
            console.log("Invalid unit. Use 'C' for Celsius or 'F' for Fahrenheit.");
    }
}


convertTemperature(100, "c");  
convertTemperature(32, "f");   
