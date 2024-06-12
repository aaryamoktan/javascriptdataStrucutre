const finds = ((arr)=>
    {
        const newarr = arr.sort((a,b)=>a-b)
        console.log(newarr)
        let size = arr.length;
        for(let i=size;i>0;i--)
        {
           if(newarr[i]>newarr[i-1])
           {
               return newarr[i-1];
               break;
           }
        }
    })
    const nums = [10,10,10,10,10,10,2]
    console.log(finds(nums))
    