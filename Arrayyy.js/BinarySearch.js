const arr = [1,2,3,4,5,6,7,8,9]
const target = 3;
var start = 0;
var end =arr.length-1;
while(start<=end)
{
  let mid = Math.floor((start+end)/2);
  if(target== arr[mid])
  {
    console.log(mid);
    break;
  }
  else if (target> arr[mid])
  {
    start = mid+1;
  }
  else if(target< arr[mid])
  {
    end = mid-1;
  }
 
}