let month = 6
let day = 25
if(day<=31&&month<=12){
    if(day>20&&month>=3&&month<=6)
        console.log("True");
    else 
        console.log("False");
}
else 
    console.log("Invalid Date");

    /*Write a program that takes day and month from the command line and prints true if

day of month is between March 20 and June 20, false otherwise.*/