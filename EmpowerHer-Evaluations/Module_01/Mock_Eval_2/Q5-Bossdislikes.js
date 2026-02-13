function bossDislikes(n, items, k, dislikes){
    // Write code here
    const dislikedSet=new Set(dislikes)
    const result=[]
    for(let i=0;i<n;i++){
      const item=items[i]
      if(!dislikedSet.has(item)){
        result.push(item)
      }
    }
    console.log(result.join(' '))
  }