let n = Math.floor(Math.random()*10); 
console.log("n = "+n);
let power =1;
for(let i=0;i<n;i++){
    power = power*2;
    console.log(power);
}
/*Write a program that takes a command-line argument n and prints a table of the

powers of 2 that are less than or equal to 2^n.*/