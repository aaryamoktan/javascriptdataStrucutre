let array = [];
let length = array.length;
let max = 5;
console.log("push operation in stack")
function push(newvalue)
{if(length>=max)
    {
        alert("overlow")
    }
    else
    {
    array[length] = newvalue;
    length++;
    }
}
push(21)
push(22)
push(23)
push(24)
push(25)
console.log(array)
function pop()
{
    if(length>0)
    {
        length--;
        array.length = length;
    }
    else{
        alert("underflow")
    }
}
pop()
pop()
console.log("pop operation in stack")
console.log(array)