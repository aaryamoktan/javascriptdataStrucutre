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
console.log(maxvalue)