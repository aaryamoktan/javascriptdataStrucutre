let array1 = [2,4,6,8];
let array2 = [1,3,5];
let array3 = [...array1,...array2];
console.log(array3)
array3.sort((a,b)=> b-a)
console.log(array3  )
