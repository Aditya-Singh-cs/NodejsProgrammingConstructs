let headsCount = 0;
let tailsCount = 0;

while (headsCount < 11 && tailsCount < 11) {
    let flip = Math.random();
    if (flip < 0.5) {
        headsCount++;
        console.log(`Heads! (Heads: ${headsCount}, Tails: ${tailsCount})`);
    } else {
        tailsCount++;
        console.log(`Tails! (Heads: ${headsCount}, Tails: ${tailsCount})`);
    }
}

if (headsCount === 11) {
    console.log("Heads wins 11 times!");
} else {
    console.log("Tails wins 11 times!");
}
