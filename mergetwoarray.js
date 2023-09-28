let array1 = [2,4,6,8];
let array2 = [1,3,5];
let array3 = [...array1,...array2];
console.log(array3)
console.log("sorting in acessending form")
array3.sort((a,b)=> a-b)
console.log(array3  )
