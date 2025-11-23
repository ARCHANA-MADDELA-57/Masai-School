const createWallet=()=>{
    let balance=0;
    return{
        addMoney:(amount)=>{
            if(amount>0){
                balance+=amount;
                console.log(`Added ${amount}.New balance: ${balance}`);
            }
        },
        checkBalance:()=>{
            return balance;
        }
    }
}
let myWallet=createWallet();
myWallet.addMoney(500);
myWallet.addMoney(200);
console.log(`CurrentBalance: ${myWallet.checkBalance()}`);

console.log(myWallet.balance)