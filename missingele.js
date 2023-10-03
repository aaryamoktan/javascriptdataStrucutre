let array =[1,2,3,5,6];
let sum=0;
let n = array.length+1;

for(let i=0;i<array.length;i++)
{
    sum += array[i];
}
let sum2 = n*(n+1)/2;

let missingnumber =  sum2-sum;

let arra303 = [1,4,5,6,3]

let i=1;
arra303.sort((a,b)=>a-b)
console.log(arra303);
let solut = [];
let j=1;

while(i<arra303.length)
{
    if(i==arra303[j])
    {
        i++;
        j++;
    }
    else{
        console.log(i)
        i++;
    }
}
