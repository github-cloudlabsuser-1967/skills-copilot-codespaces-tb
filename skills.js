// function to covert Celsius
// to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Driver code
let celsius = 25;
let fahrenheit = celsiusToFahrenheit(celsius);
console.log(`${celsius} Celsius is equal to ${fahrenheit} Fahrenheit`);
