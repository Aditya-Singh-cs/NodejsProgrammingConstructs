let a = parseInt(process.argv[2], 10);
let b = parseInt(process.argv[3], 10);
let c = parseInt(process.argv[4], 10);

let result1 = a + b * c;
let result2 = a % b + c;
let result3 = c + a / b;
let result4 = a * b + c;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

let max = result1;
let min = result1;

if (result2 > max) {
    max = result2;
}
if (result3 > max) {
    max = result3;
}
if (result4 > max) {
    max = result4;
}

if (result2 < min) {
    min = result2;
}
if (result3 < min) {
    min = result3;
}
if (result4 < min) {
    min = result4;
}

console.log("Maximum Value:", max);
console.log("Minimum Value:", min);
