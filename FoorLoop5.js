let num = Math.ceil(Math.random()*100);
console.log("Num is: "+num);
console.log("Factors are:");
for(let i=1;i<=num;i++){
    if(num%i==0)
        console.log(i);
}
/*Write a program to compute Factors of a number N using prime factorization method.

Logic -> Traverse till i*i <= N instead of i <= N for efficiency.
O/P -> Print the prime factors of number N.*/