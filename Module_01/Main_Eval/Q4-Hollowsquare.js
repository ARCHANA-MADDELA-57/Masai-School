function patternPrinting(N) {
    // Write code here
    for(let i=0;i<N;i++){
      let row=""
      for(let j=0;j<N;j++){
        if(i===0||i===N-1||j===0||j===N-1){
          row+="*"
        }else{
          row+=" "
        }
        if(j!==N-1) row+=" "
      }
      console.log(row)
    }
  }