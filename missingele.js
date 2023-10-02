let array =[1,2,3,5,6];
let sum=0;
let n = array.length+1;
console.log(n);
for(let i=0;i<array.length;i++)
{
    sum += array[i];
}
let sum2 = n*(n+1)/2;
console.log(sum2);
let missingnumber =  sum2-sum;
console.log(missingnumber)

