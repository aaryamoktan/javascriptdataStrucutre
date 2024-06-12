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
   // another approach optimal
   //const finds = ((arr)=>
   // {
   //    let fl = 0;
   //    let sl = 0;
   //    for(let i = 0; i<arr.length;i++)
   //    {
   //        if(arr[i]>fl)
   //        {
   //            sl = fl;
   //            fl=arr[i];
   //        }
   //        else if(arr[i]!=fl&& arr[i]>sl)
   //        {
   //            sl= arr[i]
   //        }
   //    }
   //    return sl
   // })
   // const nums = [1,2,3,44,55,44,55,66,77]
   // console.log(finds(nums))
    