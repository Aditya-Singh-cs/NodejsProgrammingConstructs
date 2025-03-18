let money = 100;
let goal = 200;
let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {
    bets++;
    let betResult = Math.random();
    if (betResult < 0.5) {
        money--; 
    } else {
        money++; 
        wins++;
    }
}

console.log(`Final Money: Rs ${money}`);
console.log(`Total Bets Made: ${bets}`);
console.log(`Total Wins: ${wins}`);

if (money >= goal) {
    console.log("You reached your goal!");
} else {
    console.log("You went broke!");
}
