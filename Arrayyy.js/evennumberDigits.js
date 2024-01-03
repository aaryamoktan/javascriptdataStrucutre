const arr = [1,231231231,2323232,333434355,45452343,2,3,4,522,33,44,122122];
let count=0;
console.log("for even number")
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    {
        count++;
        let count2 = 0;
        for(let n=arr[i];n>0;n=Math.floor(n/10))
        {
            count2++;
        }
        console.log(`the total number of the digit of number ${arr[i]} is ${count2++}`)
    }

}
console.log(`the total even number is ${count}`)

console.log("for odd number")
var cot = 0;
for(let i=0;i<arr.length;i++)
{
    if(arr[i]%2!=0)
    {
        cot++;
        let cot2 = 0;
        for(let n=arr[i];n>0;n=Math.floor(n/10))
        {
            cot2++;
        }
        console.log(`the total number of the digit of number ${arr[i]} is ${cot2++}`)
    }

}
console.log(`the total odd number is ${cot}`)