const name1 = "aarya";
const target = "y";
const  apple =()=>
{


for(let i=0;i<name1.length;i++)
{
    if(target== name1[i])
    {
        console.log(i);
        break;
    }
    if(name1.length==0)
    {
    console.log("empty array")
    }
    

}

}
apple();