function findPair(arr, n, k) {
    const seenNumbers=new Set()
    for(i=0;i<n;i++){
     const currentNum=arr[i]
     const complement=k-currentNum
     if(seenNumbers.has(complement)){
       console.log("1")
       return
      }
      seenNumbers.add(currentNum)
    }
    console.log("-1")
  }