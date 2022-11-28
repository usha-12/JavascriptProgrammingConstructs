
    let digit1 = 100;
    let digit2 = 80;
    let digit3 = 200;
    let digit4 = 560;
    let digit5 = 30;
    let max = digit1;
    let min = digit1;
    if(digit2>max)
        max = digit2;
    if(digit3>max)
        max = digit3;
    if(digit4>max)
        max = digit4;
    if(digit5>max)
        max = digit5;
    if(digit2<min)
        min = digit2;
    if(digit3<min)
        min = digit3;
    if(digit4<min)
        min = digit4;
    if(digit5<min)
        min = digit5;
    console.log("MAX: "+max);
    console.log("MIN: "+min);
/*Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value*/