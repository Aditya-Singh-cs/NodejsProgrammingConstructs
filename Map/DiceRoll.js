const rollDie = () => Math.floor(Math.random() * 6) + 1;

const rollUntilLimit = () => {
    let dieRolls = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };
    let maxRolls = 10;
    let reachedLimit = false;

    while (!reachedLimit) {
        let roll = rollDie();
        dieRolls[roll]++;

        if (dieRolls[roll] === maxRolls) {
            reachedLimit = true;
        }
    }

    console.log(dieRolls);

    let maxNum = Object.keys(dieRolls).reduce((a, b) => (dieRolls[a] > dieRolls[b] ? a : b));
    let minNum = Object.keys(dieRolls).reduce((a, b) => (dieRolls[a] < dieRolls[b] ? a : b));

    console.log(`Number that reached 10 times first: ${maxNum}`);
    console.log(`Number that appeared the least: ${minNum}`);
};

rollUntilLimit();
