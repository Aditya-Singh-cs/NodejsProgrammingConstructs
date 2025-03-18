function palindrome(num) {
    let temp = num;
    let rev = 0;

    while (temp > 0) {
        let rem = temp % 10;
        rev = (rev * 10) + rem;
        temp = Math.floor(temp / 10);
    }

    return rev === num; 
}

// Convert input to integer before passing
const number = parseInt(process.argv[2], 10);
console.log(palindrome(number));
