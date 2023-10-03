class list{
    constructor(data)
    {
        this.head={
            value:data,
            next:null
        }
        this.tail = this.head;
        this.size=1;
    }
    append(newdata)
    {
        let newnode = {
            value:newdata,
            next:null
        }
        this.tail.next=newnode;
        this.tail=newnode;
        this.size++;
    }
   traverse()
   {
    let counter=0;
    let node =this.head
    while(counter<this.size)
    {
        console.log(node);
        node=node.next;
        counter++;
    }
}
    deletelastnode()
    {
        console.log("deletenode from last")
        let counter=1;
        let node =this.head
        while(counter<this.size-1)
        {
           
            node=node.next;
            counter++;   
            
        }
        node.next = null
       
        for(let i=0;i<this.size;i++)
        {
            
        }
        
    }
   
}
const listn = new list(1);
console.log(listn)
listn.append(2)
listn.append(3)
listn.append(4)
listn.deletelastnode()

