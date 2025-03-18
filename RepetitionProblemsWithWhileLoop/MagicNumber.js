let magicNumber= parseInt(process.argv[2],10);
let low = 1;
let high = 100;
let mid;

while (low < high) {
    mid = Math.floor((low + high) / 2);
    
    if (magicNumber > mid) {
        console.log("Yes");
        low = mid + 1; 
    } else {
        console.log("No");
        high = mid;
    }
}

console.log(`The magic number is: ${low}`);
