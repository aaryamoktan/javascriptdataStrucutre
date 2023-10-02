console.log("linklist")
class list{
    constructor(data)
    {
        this.head={
            value:data,
            next:null
        };
        this.tail = this.head;
        this.size=1;
    }
    appendnode(nodedata)
    {
        let newnode={
            value:nodedata,
            next:null
        }
        this.tail.next=newnode;
        this.tail=newnode
        this.size++;    

    }
}
let newlist = new list(200);
console.log(newlist)
newlist.appendnode(300)
newlist.appendnode(400)
newlist.appendnode(500)
console.log(newlist)