const prompt = require('prompt-sync')({ sigint: true });
let seconds = parseInt(prompt("Enter the number of seconds to count down: "));

if (isNaN(seconds) || seconds <= 0) {
    console.log("Invalid input. Please enter a positive number.");
    return; 
}

let remainingTime = seconds;
console.log(`Starting countdown from ${remainingTime} seconds.`);

function stopTimer(message) {
    clearInterval(intervalId);
    console.log(message);
}

const intervalId = setInterval(() => {
    remainingTime--;
    
    if (remainingTime >= 0) {
        console.log(`Time remaining: ${remainingTime} seconds`);
    }

    if (remainingTime <= 0) {
        stopTimer("Countdown Complete!");
    }

}, 1000);
setTimeout(() => {
    
    if (remainingTime > 0 && remainingTime < seconds - 2) { 

    }
}, 3000);