class Queue{
    constructor(){
        this.storage = {}
        this.head = this.tail = 0;
    }

    enqueue(elem){
        this.storage[this.tail] = elem;
        this.tail++
    }

    dequue(){
        delete this.storage[this.head];
        this.head++;
    }

    print(){
        console.log(queue)
    }
}
let queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print()

queue.dequue()
queue.print()