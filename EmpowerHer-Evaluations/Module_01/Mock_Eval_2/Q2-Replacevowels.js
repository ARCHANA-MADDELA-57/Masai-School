function replaceVowels(str, N){
	//Enter Code Here
	let CharArray=str.split('')
	for(i=0;i<N;i++){
	  if(CharArray[i]=='a'||CharArray[i]=='e'||CharArray[i]=='i'||CharArray[i]=='o'||CharArray[i]=='u'){
	    CharArray[i]='*'
	  }
	}
	let newStr = CharArray.join('')
	console.log(newStr)
}
