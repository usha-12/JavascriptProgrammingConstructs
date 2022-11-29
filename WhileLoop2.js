let num = Math.ceil(Math.random()*100); 
console.log(num);
let n=50;
let start =0;
let end = 100;
while(n!=num){
    if(n==num)
        console.log("Num is: "+n);
    else if(n>num){
        end = n;
        n=Math.floor((start+end)/2);
    }
    else if(n>num){
        start = n;
        n=Math.floor((start+end)/2);
    }
}
/*Find the Magic Number

a. Ask the user to think of a number n between 1 to 100
b. Then check with the user if the number is less then n/2 or greater
c. Repeat till the Magic Number is reached..*/