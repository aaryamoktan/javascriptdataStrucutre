function rota(arrat,a)
{
    let size = arrat.length;
    if(a>size)
        {
            a= size%a;
        }
    const rotate = arrat.splice(a,size)
    arrat.unshift(...rotate)
    return arrat
}
console.log(rota([1,2,3,4,5,6,7,8,9],1))