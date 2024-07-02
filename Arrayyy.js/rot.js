function rota(arrat,a)
{
    let size = arrat.length;
    if(a>size)
        {
            a= size%a;
        }
    const rotate = arrat.splice(a,size)
    arrat.unshift(...rotate)
    return arrat
}
//console.log(rota([1,2,3,4,5,6,7,8,9],1))


function rotaa(arrat,a)
{
   let size = arrat.length;
   if(a>size)
    {
        a=a%10;
    }
    rotater(arrat,0,arrat.length-1)
    rotater(arrat,0,a-1)
    rotater(arrat,a,size-1)

    return arrat;
}
function rotater(nums,left,right)
{
    while(left<right)
        {
    let temp = nums[left];
    nums[left++]=nums[right];
    nums[right--] = temp;
        }   
}

console.log(rotaa([1,2,3,4,5,6,7,8,9],3))
//remove duplicate element feom arrya;

function duplicate(arr)
{
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i] === arr[i+1])
                {
                    arr.splice(i+1,1);
                    i--;
                }
                
        }
        return arr;
}
console.log(duplicate([1,1,1,2,2,3,3,4,5,5,6,7,66]))