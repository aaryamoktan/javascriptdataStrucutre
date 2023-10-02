console.log("linklist")
class list{
    constructor(data)
    {
        this.head={
            value:data,
            next:null
        }
    }
}
let newlist = new list(200);
console.log(newlist)