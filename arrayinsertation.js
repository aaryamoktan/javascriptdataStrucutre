let array = [60,30,3,9,10,50];
let element = 2;
let position=3;
console.log("element berfore insertation")
for( let i=0;i<array.length;i++)
{
    console.log(array[i])
}
for(let i=array.length-1;i>=0;i--)
{
    if(i>=position)
    {
        array[i+1]=array[i]
        if (i==position)
    {
        array[i] = element;
    }
}    
}
console.log("arrya after insertion new1 element")
for( let i=0;i<array.length;i++)
{
    console.log(array[i])
}
console.log("insertion at start")
for(let i=array.length-1;i>=0;i--)
{
    if(i>=0)
    {
        array[i+1] =array[i]
        if(i==0)
        {
            array[i]=element
        }
    }
}

for( let i=0;i<array.length;i++)
{
    console.log(array[i])
}
console.log("insertion at last")
array[array.length] = element;
for( let i=0;i<array.length;i++)
{
    console.log(array[i])
}
function insert()
{
   
    let element1 =document.getElementById("ele").value;
    let position1 =document.getElementById("pos").value;
    for(let i=array.length-1;i>=0;i--)
    {
        if(i>=position1)
        {
            array[i+1] = array[i]
            if(i==position1)
            {
                array[i] = element1;
            }
        }
    } for( let i=0;i<array.length;i++)
{
    document.write(`${array[i]} `)
}
}
