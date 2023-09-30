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
console.log("word reverse question in leetcode")
let lent = name1.length-1

let ansstr=""
let i=name1.length-1;
let name3 = "hi i love you"
let name2= name3.split(' ')
console.log(name2.length)
for(let i = name2.length-1;i>=0;i--)
{
    if(name2[i] == '') continue;
    if(ansstr.length>0) ansstr+=' ';
    ansstr+=name2[i]
    
}
console.log(ansstr)