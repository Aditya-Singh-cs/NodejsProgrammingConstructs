let n = parseInt(process.argv[2], 10);
let power = 0;

while (power <= n && Math.pow(2, power) <= 256) {
    console.log(`${Math.pow(2, power)}`);
    power++;
}
