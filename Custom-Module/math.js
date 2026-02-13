export function checkPrime(n){
    if(n<=1){
        return false
    }
    if(n%2===0&&n>2){
        return false
    }
    const limit=Math.floor(Math.sqrt(n));
    for(let i=3;i<=limit;i+=2){
        if(n%i===0){
            return false;
        }
    }
    return true;
}
