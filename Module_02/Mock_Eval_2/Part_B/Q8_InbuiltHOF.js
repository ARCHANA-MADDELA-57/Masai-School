let nums = [10, 3, 7, 20, 13, 2];
let squares = nums.map(num=>num*num);
console.log(squares);

const isPrime=(num)=>{
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0) return false;
    }
    return true;
}
let primeNumbers=nums.filter(isPrime);
console.log(primeNumbers)

let sum=nums.reduce((accumulator,currentValue)=>accumulator+currentValue,0);
console.log(sum);

let descendingOrder=nums.sort((a,b)=>b-a);
console.log(descendingOrder);