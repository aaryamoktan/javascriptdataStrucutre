function pal(nums)
{
    let y = 0;
    let x = nums;
    while(nums>0)
        {
            let last = nums%10;
            y = y*10+last;
            nums = Math.floor(nums/10)
        }
        if(x==y)
            {
                return true;
            }
            else{
                return false
            }
}
console.log(pal(1222308234921))