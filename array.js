let data = [9,45,2,8,45,23,7,78,0,11,41,77]
// for(let i=0;i<data.length;i++)
// {
//     document.write(`Array ${[i]} number is ${data[i]} <br/>`)
// }
let x = 3;
document.write(data[3])
function submit()
{ let element = document.getElementById("element").value;
 if (element>=0 && element<data.length)
 {  
 alert(` your search element is ${data[element]}`) 
 }
 else{
     alert("plz enter the valid number")
 }
 
}