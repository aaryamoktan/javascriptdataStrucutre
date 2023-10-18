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
    }
    removenode(data)
    {
        console.log("deletenode from given position")
        let node =this.head
       for(let i=1;i<=data-1;i++)
        {    
            console.log(node)  
            node=node.next;      
        }
        let newnode = node.next.next
        node.next = newnode
        console.log(node)   
    }
    addnode(position,newnode1)
    {
        console.log("Add new node at given position")
        let newnode =this.head;
        for(let i=1;i<position-1;i++)
        {
            newnode = newnode.next;
        } 
        let node = {
            value:newnode1,
            next:null
        }
        node.next = newnode.next.next
        newnode.next=node
        console.log(newnode)   
    } 
}
const listn = new list(1);
console.log(listn)
listn.append(2)
listn.append(3)
listn.append(4)
listn.append(5)


listn.addnode(2,10)

