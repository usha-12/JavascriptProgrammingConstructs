const LOSE = 0;
const WIN = 1;
let balance = 100;
let winCount=0;
let totalBets=0;

while(balance>0&&balance<200){
    let toss = Math.floor(Math.random()*10)%2;
    switch(toss){
        case LOSE:
            balance--;
            break;
        case WIN:
            balance++;
            winCount++;
            break;
    }
    totalBets++;
}
console.log("Total bets = "+totalBets);
console.log("Total wins = "+winCount);
console.log("Final balance = "+balance);
/*Write a Program where a gambler starts with Rs 100 and places Re 1 bet
until he/she goes broke i.e. no more money to gamble or reaches the
goal of Rs 200. Keeps track of number of times won and number of bets
made.*/