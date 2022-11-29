const toFahrenheit =0;
const toCelsius =1;
function getConvertedTemperature(choice,temperature){
    switch(choice){
        case toFahrenheit:
            console.log("You selected-> Convert Celsius to Fahrenheit");
            return (temperature*(9/5)) +32;
        case toCelsius:
            console.log("You selected-> Convert Fahrenheit to Cahrenheit");
            return ((temperature-32)*5/9);
    }
}

let choice = Math.floor(Math.random()*10)%2;
let temp=0;
if(choice==0){
    temp = Math.floor(Math.random()*100); 
    console.log("Selected Celsius Temp: "+temp);
}
if(choice==1){
    temp = Math.floor(Math.random()*180)+32;
    console.log("Selected Fahrenheit Temp: "+temp);
}
let convertedTemp = getConvertedTemperature(choice,temp);
console.log("Converted temperature = "+convertedTemp);
/*Help user find degF or degC based on their Conversion Selection. Use
Case Statement and ensure that the inputs are within the Freezing Point (
0 °C / 32 °F ) and the Boiling Point of Water ( 100 °C / 212 °F )
a. degF = (degC * 9/5) + 32
b. degC = (degF – 32) * 5/9*/