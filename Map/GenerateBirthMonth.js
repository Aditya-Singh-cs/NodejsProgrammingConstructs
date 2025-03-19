const generateBirthMonths = () => {
    let individuals = 50;
    let birthMonthMap = {};

    for (let i = 1; i <= 12; i++) {
        birthMonthMap[i] = [];
    }

    for (let i = 1; i <= individuals; i++) {
        let birthMonth = Math.floor(Math.random() * 12) + 1; 
        birthMonthMap[birthMonth].push(`Person${i}`);
    }

    console.log("Birthdays Grouped by Month:");
    for (let month in birthMonthMap) {
        console.log(`Month ${month}: ${birthMonthMap[month].length > 0 ? birthMonthMap[month].join(", ") : "No Birthdays"}`);
    }
};

generateBirthMonths();
