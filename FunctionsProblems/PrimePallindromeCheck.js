function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function getPalindrome(num) {
    let temp = num;
    let rev = 0;
    while (temp > 0) {
        let rem = temp % 10;
        rev = (rev * 10) + rem;
        temp = Math.floor(temp / 10);
    }
    return rev;
}

function checkPrimeAndPalindrome(num) {
    if (isPrime(num)) {
        let palindromeNum = getPalindrome(num);
        if (isPrime(palindromeNum)) {
            console.log(`${num} is prime and its palindrome ${palindromeNum} is also prime.`);
        } else {
            console.log(`${num} is prime but its palindrome ${palindromeNum} is not prime.`);
        }
    } else {
        console.log(`${num} is not a prime number.`);
    }
}


const number = parseInt(process.argv[2], 10);

if (isNaN(number)) {
    console.log("Please provide a valid number.");
} else {
    checkPrimeAndPalindrome(number);
}
