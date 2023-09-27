let array3 = [2,4,3,5,7,1,44];
document.write(array3)
function search()
{
    let element5 = document.getElementById("ele").value
    for(let i=0;i<array3.length;i++)
    {
        if(array3[i] == element5)
        {
            document.write(`Search ${element5} in position of ${i+1}`)
        }
    }
}