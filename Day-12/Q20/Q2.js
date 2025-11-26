function createBankAccount() {
    let balance = 0;
    let transactionHistory = [];
    function recordTransaction(type, amount, success) {
      const timestamp = new Date().toLocaleTimeString();
      transactionHistory.push({
        type: type,
        amount: amount,
        success: success,
        time: timestamp
      });
    }
  
    return {
      deposit: function(amount) {
        if (amount > 0) {
          balance += amount;
          recordTransaction('deposit', amount, true);
          console.log(`Deposited: ${amount}. Current balance: ${balance}`);
        } else {
          recordTransaction('deposit', amount, false);
          console.log("Deposit failed: Amount must be positive.");
        }
      },
  
      withdraw: function(amount) {
        if (amount > 0 && balance >= amount) {
          balance -= amount;
          recordTransaction('withdraw', amount, true);
          console.log(`Withdrawn: ${amount}. Current balance: ${balance}`);
        } else {
          recordTransaction('withdraw', amount, false);
          console.log("Withdrawal failed: Insufficient balance or invalid amount.");
        }
      },
  
      getBalance: function() {
        console.log(`Current balance: ${balance}`);
        return balance;
      },
  
      getHistory: function() {
          return [...transactionHistory]; 
      }
    };
  }
  
  const account = createBankAccount();
  account.deposit(500); 
  account.withdraw(200); 
  account.withdraw(400); 
  account.getBalance(); 
  console.log("Attempting direct access:", account.balance); 
  console.log("\nTransaction History:", account.getHistory());

/*
The closure pattern creates data privacy by trapping the variables in a scope that cannot be accessed directly:
balance and transactionHistory are declared using let inside createBankAccount(). This makes them local to that scope.
The object returned by createBankAccount() contains methods. 
These methods, being defined inside createBankAccount(), form a closure. 
* This closure keeps the outer scope's variable environment alive in memory, ensuring the private variables persist.
The only way to interact with the variables is through the public methods exposed in the returned object, 
thereby preventing direct access.
*/

/*
Closures enable the transactionHistory feature because:
State Retention: Like balance, transactionHistory is kept alive by the closure. 
Every single deposit or withdrawal call uses the same, persistent array instance.
Accumulation: Without the closure, every time a deposit or withdrawal function was called, 
the transactionHistory array would be redefined and reset.
 The closure ensures that the array accumulates transactions over the lifetime of the account object.
Control: The closure also allows us to control how the history is accessed.
*/