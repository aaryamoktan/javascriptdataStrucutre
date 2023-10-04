let array = [1,2,3,4,5,6,7];
let data=3;
let i = 0;
while(i<array.length)
{
    if(data == array[i])
    {
        console.log(i)    
    }
    i++;  
}
console.log('search in string')
let arr  ="aaryamoktan";
let target = 'a';
let arr1 = [];
let finalarra = arr.length;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]==target)
    {
        arr1 =+ [i]
        console.log(arr1)
    }  
}
console.log("find minimum number")
let number = [23,8,4,55,6,7];
let smallnumber=1000000;
for(let i=0;i<number.length;i++)
{
    if(smallnumber>number[i])
    {
        smallnumber = number[i]
    }
}
console.log(smallnumber)