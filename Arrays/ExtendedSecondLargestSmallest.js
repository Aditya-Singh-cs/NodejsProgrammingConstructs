const generateNumber= ()=>{

    let arr=[]
    for(let i=0;i<10;i++){
        arr.push(Math.floor(Math.random()*900)+100)
    }

    arr.sort((a,b)=>a-b);

    console.log(arr);
    
    console.log(arr[1]);
    console.log(arr[arr.length-2]);
    
    
};

generateNumber();
