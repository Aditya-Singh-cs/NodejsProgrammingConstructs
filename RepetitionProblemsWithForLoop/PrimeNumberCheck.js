let num = parseInt(process.argv[2], 10);
let isPrime = true;

if (num < 2) {
    isPrime = false;
} 
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log(`${num} is a Prime Number`);
}
else {
    console.log(`${num} is Not a Prime Number`);
}
