let array2 = [1,2,3,4,5,6,7];
console.log("delete element from stat point");
for(let i=0;i<array2.length;i++)
{
    array2[i]=array2[i+1]
}
for( let i=0; i<array2.length-1;i++)
{
    console.log(array2[i])
}

