function weightLifting(n,arr){
    let harryTotal=0
    let johnTotal=0
    let harryPrevMove=0
    let johnPrevMove=0
    
    let left=0
    let right=n-1
    
    if(left<=right){
      harryPrevMove=arr[left]
      harryTotal+=arr[left]
      left++
    }
    while(left<=right){
      let johnCurrentWeight=0
      let johnStartRight=right
      
      while(johnCurrentWeight<=harryPrevMove && right>=left){
        johnCurrentWeight+=arr[right]
        right--
      }
      
      if(johnCurrentWeight>harryPrevMove){
        johnTotal+=johnCurrentWeight
        johnPrevMove=johnCurrentWeight
      }
      if(left>right) break
      
      let harryCurrentWeight=0
      let harryStartRight=left
      
      while(harryCurrentWeight<=johnPrevMove && left<=right){
        harryCurrentWeight+=arr[left]
        left++
      }
      
      if(harryCurrentWeight>johnPrevMove){
        harryTotal+=harryCurrentWeight
        harryPrevMove=harryCurrentWeight
      }
    }
    console.log(harryTotal,johnTotal)
  }