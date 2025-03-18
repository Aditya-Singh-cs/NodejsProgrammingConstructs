let num = parseInt(process.argv[2], 10);
let f= 1;

for (let i = 1; i <= num; i++) {
    f*= i;
}

console.log(f);
