function patternOfL(N) {
    // Write code here
    for(i=1;i<=N;i++){
      let bag=" "
      if(i==N){
        bag="* ".repeat(N).trim()
      }else{
        bag="*"
      }
      console.log(bag)
    }
  }