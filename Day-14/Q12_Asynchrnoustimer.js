function timer(duration, onComplete) {
    console.log(`Timer set for ${duration} milliseconds...`);
  
    setTimeout(() => {
      const message = `Timer of ${duration}ms finished`;
  
      onComplete(message);
  
    }, duration);
  }
  
  
  function handleTimerComplete(resultMessage) {
    console.log(`[CALLBACK EXECUTED] ${resultMessage}`);
  }
  
  timer(2000, handleTimerComplete);
  
  console.log("Waiting for the timer to elapse. Synchronous code continues to run...");
  
  