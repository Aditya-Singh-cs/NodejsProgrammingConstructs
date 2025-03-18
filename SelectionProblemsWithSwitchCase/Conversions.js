let conversionType = parseInt(process.argv[2]);
let value = parseFloat(process.argv[3]);

switch (conversionType) {
    case 1:
        let inches = value * 12;
        console.log(`${value} feet is equal to ${inches} inches`);
        break;

    case 2:
        let feet = value/ 12;
        console.log(`${value} inches is equal to ${feet} feet`);
        break;

    case 3:
        let meters = value * 0.3048;
        console.log(`${value} feet is equal to ${meters} meters`);
        break;

    case 4:
        let feetFromMeter = value / 0.3048;
        console.log(`${value} meters is equal to ${feetFromMeter} feet`);
        break;

    default:
        console.log("Invalid conversion type");
        console.log("Feet to Inch");
        console.log("Inch to Feet");
        console.log("Feet to Meter");
        console.log("Meter to Feet");
}
