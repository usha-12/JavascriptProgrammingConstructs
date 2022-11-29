let value = Math.floor(Math.random()*100);
console.log("Given value: "+value);
let conversionType=Math.floor(Math.random()*10)%4+1;
let convertedValue=0;

switch(conversionType){
    case 1:
        convertedValue = value*12;
        console.log("Feet to inch:"+convertedValue);
    case 2:
        convertedValue = value/12;
        console.log("Inch to feet: "+convertedValue);
    case 3:
        convertedValue = value*0.3048;
        console.log("Feet to meter: "+convertedValue);
    case 4:
        convertedValue = value/0.3048;
        console.log("Meter to feet: "+convertedValue);
}
/*4. Write a program that takes User Inputs and does Unit Conversion of

different Length units
1. Feet to Inch 3. Inch to Feet
2. Feet to Meter 4. Meter to Feet*/
