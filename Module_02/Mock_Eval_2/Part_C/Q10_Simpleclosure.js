const counter=()=>{
    let count=0;
    return()=>{
        count++;
        return count;
    }
}
const c=counter();
console.log(c());
console.log(c());
console.log(c());