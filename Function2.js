function palindromeChecker(num1,num2){
    let palindromeNum1=0;
    while(num1>0){
        let rem = num1%10;
        palindromeNum1 = palindromeNum1*10 +rem;
        num1=Math.floor(num1/10);
    }
    if(palindromeNum1 == num2)
        return true;
    else 
        return false;
}

let num1 = 143;
let num2 = 341;
let isPalindrome = palindromeChecker(num1,num2);
console.log("Numbers: "+num1+", "+num2);
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);

isPalindrome = palindromeChecker(15,31);
console.log("Numbers: 15, 31");
console.log("Is number 2 a palindrome of number 1: "+isPalindrome);
/*Write a function to check if the two numbers are Palindromes*/