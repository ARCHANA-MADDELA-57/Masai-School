function checkPalindrome(str){
    //write code here
    const reversedStr=str.split('').reverse().join('')
    if(str==reversedStr){
      console.log("Yes")
    }else{
      console.log("No")
    }
  }