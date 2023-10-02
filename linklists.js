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
    traversing()
    {
        console.log("traversing in linklist")
        let cunter = 0;
        let currentnode = this.head;
        console.log(this.size)
       while(cunter<this.size)
       {
        console.log(currentnode)
        currentnode=currentnode.next;
        cunter++;
       } 
    }
    removenode()
    {
        console.log("remove node")
    }

}
let newlist = new list(200);

newlist.appendnode(300)
newlist.appendnode(400)
newlist.appendnode(500)
console.log(newlist)
newlist.traversing()
console.log(newlist)
newlist.removenode()
