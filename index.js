
let usernames = ["admin", "testuser", "archana"]; 

function signup(userName) {
    if (usernames.includes(userName)) {
        return "User Already Registed, Please Login";
    } else {
        usernames.push(userName);
        console.log(`Current users: ${usernames.join(", ")}`); 
        return "Signup Sucessfull, Please Login";
    }
}

console.log("--- Signup Tests ---");
console.log(signup("archana")); 
console.log(signup("newuser")); 
console.log(signup("anothernew")); 