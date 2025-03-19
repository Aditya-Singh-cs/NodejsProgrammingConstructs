const findRepeatedDigits = () => {
    let repeatedNumbers = [];
    
    for (let i = 10; i <= 100; i++) {
        let str = i.toString();
        if (str.length === 2 && str[0] === str[1]) {
            repeatedNumbers.push(i);
        }
    }
    
    console.log(repeatedNumbers);
};

findRepeatedDigits();