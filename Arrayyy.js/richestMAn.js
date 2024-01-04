const arr = [[1,2,3],[2,3,4],[10,112]];
var size =arr.length;
let maxvalue=0;
for(let i=0;i<size;i++){
    let sum = 0;
    let innerarry = arr[i];
    for(let j=0;j<innerarry.length;j++)
    {
        sum=sum+innerarry[j];
    }
    maxvalue = Math.max(maxvalue,sum)  
}
console.log("richest man amrong the group")
console.log(maxvalue)
console.log("poor man among the group")
let minvalue =[];
let minv = 100000;
for(let i=0;i<size;i++)
{
    let sum1 = 0;
    let inn = arr[i];
    for(let j=0;j<inn.length;j++)
    {
        sum1 = sum1+inn[j];
    }
    minv = Math.min(minv,sum1)
    minvalue.push(sum1) 
    
}
console.log(minv)
let poor=100000000;
for(let i=0;i<minvalue.length;i++)
{
    if(poor>minvalue[i])
    {
        poor = minvalue[i]
    }
}
console.log(poor)