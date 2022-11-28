let year = Math.floor(Math.random()*10000);
if(year%4==0){
    if(year%100==0){
        if(year%400==0)
            console.log("Leap Year");
        else
            console.log("Not a leap year");
    }
    else 
        console.log("Leap Year");
}
else 
    console.log("Not a leap year");
console.log("Year "+ year);
/*Write a program that takes a year as input and outputs the Year is a Leap Year or not
a Leap Year. A Leap Year checks for 4 Digit Number, Divisible by 4 and not 100 unless
divisible by 400.*/