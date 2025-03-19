const generateNumber= ()=>{

    let arr=[]
    for(let i=0;i<10;i++){
        arr.push(Math.floor(Math.random()*900)+100)
    }

    let largest = -Infinity, secondLargest = -Infinity;
    let smallest = Infinity, secondSmallest = Infinity;

    for (let num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }

        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }

    console.log(secondLargest);
    console.log(secondSmallest);
};

generateNumber();
