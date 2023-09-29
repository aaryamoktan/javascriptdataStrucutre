let array = [5,6,3];
for(let i=0;i<array.length;i++)
{
    for(let j=i+1;j<array.length;j++)
    {
        if(array[i]>array[j])
        {
            let temp = array[i];
            array[i]=array[j];
            array[j]=temp;
        }
    }
}
console.log(array)
console.log("cyclic sort")
console.log("only used in 1 to n form")
let array2 = [3,4,5,6,7,8,2,1];
let i =0;
while( i<array2.length )
{
    if(array2[i] !=i+1)
    {
        let index = array2[i]-1;    
        let temp = array2[i];
        array2[i] = array2[index]
        array2[index] =temp;
    }
    else{
        i+=1;
    }
    
}
console.log(array2)