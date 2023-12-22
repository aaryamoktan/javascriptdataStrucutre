const arr1 = [2,2,2,3,3,3,4,4,4];
const arr2 = arr1.sort().reverse();

for(let i =0;i<arr2.length;i++)
{
    if(arr2[i]!=arr2[i+1])
    {
        
        console.log(arr2[i+1]);
        break
    }
    else{
        i++;
    }
    
}