function solve(N,K,arr){
    // write code here
    let left=0
    let right=N-1
    while(left<right){
      const sum=arr[left]+arr[right]
      if(sum===K){
        console.log("Yes")
        return
      }else if(sum<K){
        left++
      }else{
        right--
      }
    }
    console.log("No")
  }