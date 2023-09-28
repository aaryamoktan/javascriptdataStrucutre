let array1 = [2,4,6,8];
let array2 = [1,3,5];
let array3 = [...array1,...array2];
let array4 = [];
console.log(array3)
console.log("sorting in acessending form")
array3.sort((a,b)=> a-b)
console.log(array3  )
console.log("sorting in dessending form")
array3.sort((a,b)=> b-a)
console.log(array3)
console.log("merging two array in simpale way using loop")
for(let i=0;i<array1.length;i++)
{
    array4[i] = array1[i];
}
for(let i=0;i<array2.length;i++)
{
    array4[array1.length+i]= array2[i];
}
console.log(array4)
