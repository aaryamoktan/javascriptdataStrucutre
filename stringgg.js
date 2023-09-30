let name1 = "aarya moktan";
let newstring= "";
console.log(name1.length)
console.log(name1.slice(-7))
console.log(name1.replace("moktan","tamang"))
let len = name1.length
for(let i=len-1;i>=0;i--)
{
    newstring +=name1[i]
}
console.log(newstring)