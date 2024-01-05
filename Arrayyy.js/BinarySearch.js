//const arr = [1,2,3,4,5,6,7,8,9]
//const target = 3;
//var start = 0;
//var end =arr.length-1;
//while(start<=end)
//{
//  let mid = Math.floor((start+end)/2);
//  if(target== arr[mid])
//  {
//    console.log(mid);
//    break;
//  }
//  else if (target> arr[mid])
//  {
//    start = mid+1;
//  }
//  else if(target< arr[mid])
//  {
//    end = mid-1;
//  }
//}
console.log("celling number");
var target1 = 2;
var arr1 = [1,3,4,7,9,11,13,14,15];
let start1 = 0;
let end1 = arr1.length-1;
console.log(end1)
let ans= 0 ;
var arr3 = [];
for(let i=0;i<arr1.length-1;i++)
{
  if(arr1[i]==target1)
  {
    console.log(arr1[i]);
    break;
  }
  if (arr1[i]>target1)
  {
   arr3.push(arr1[i])
  }
}
console.log(arr3[0]);