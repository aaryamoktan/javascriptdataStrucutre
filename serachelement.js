let array3 = [2,4,3,5,7,1,44];
document.write(array3)
function search()
{
    let element = 44
    for(let i=0;i<array3.length;i++)
    {
        if(array3[i]===element)
        {
            console.log(array3[i])
        }
    }
}