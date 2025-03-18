let s= parseInt(process.argv[2], 10);
let e= parseInt(process.argv[3], 10);

for (let num = s; num <= e; num++) {
    let isPrime = true;

    if (num < 2) {
        isPrime = false;
    } else {
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }

    if (isPrime) {
        console.log(num);
    }
}
