let year = parseInt(process.argv[2], 10);

if (year < 1000 || year > 9999) {
    console.log("Invalid input!");
} 
else if (year % 4 === 0) {
    if (year % 100 === 0) {
        if (year % 400 === 0) {
            console.log(year + " is a Leap Year");
        } 
        else {
            console.log(year + " is Not a Leap Year");
        }
    } 
    else {
        console.log(year + " is a Leap Year");
    }
} 
else {
    console.log(year + " is Not a Leap Year");
}
