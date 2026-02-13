function numberPattern(N){
    //write your code here
    for(i=1;i<=N;i++){
      res = ""
      for (j = 1; j <= i; j++){
      res=res+j
      }
      console.log(res)
    }
    for(i=N-1;i>=1;i--){
      bag=""
      for(j=1;j<=i;j++){
        bag=bag+j
      }
      console.log(bag)
    }
    
  }