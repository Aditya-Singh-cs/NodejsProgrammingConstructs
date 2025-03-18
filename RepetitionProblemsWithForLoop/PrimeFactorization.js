let num = parseInt(process.argv[2], 10);

for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
        console.log(i);
        num /= i;
    }
}
if (num > 1) {
    console.log(num);
}