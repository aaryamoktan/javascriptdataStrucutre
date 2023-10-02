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
    traverse(data)
    {
        let counter = 0;
        let currentnode = this.head;
        while(counter<this.size)
        {
            console.log(currentnode)
            currentnode=currentnode.next;
            counter++;
        }

    }
    deleten(index)
    {
        let det = this.head;
        let counter = 0;
        if(index===1)
        {
            this.head = det.next;
        }
        else{
            while(counter<index-1)
            {
                det = det.next;
                counter++;
            }
            let next1 = det.next.next;
            det.next =next1;
        }
    }
    insert(data,pos)
    {
        let data1 = this.head;
        let counter = 0;
        if(pos===1)
        {
            data.next = this.head.next;
            this.head.next = data;    
        }
        else{
            while(counter<pos-1)
            {
                data1=data1.next;
            }
            data.next = data1.next;
            data1.next = data;
            
        }
    }
}
const listn = new list(1);
console.log(listn)
listn.append(2)
listn.append(3)
listn.append(4)
console.log(listn)
listn.traverse();
listn.deleten(2)
listn.traverse();
listn.insert(7,3)