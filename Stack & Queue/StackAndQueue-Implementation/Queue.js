const Node = require("./Node");

class Queue{
    constructor(){
        this.front = null;
        this.rear = null;
    }

    //fun that add items into Queue
    Enqueue(value){

        const newElement = new Node(value);

        // we need to check if the Queue empty to know where add the item:
        if (!this.front){

            this.front = newElement;
            this.rear = newElement;

        }else{
            this.rear.next = newElement;

            //update the values:
            this.rear = newElement;
        }
    }

    //fun that remove item from queue:
    Dequeue(){

        //check if there are item to remove it:
        if(this.front){
            const removeItem = this.front.value;

            //update:
            this.front = this.front.next;
            
            if(!this.front){
                this.rear = null;
            }
            return removeItem;
        }else{
            return "there no items on the queue";
        }
    }

    //to return item without removing it:
    peek(){
        if(this.front){
            return this.front.value
        }else{
            return "there no items on the queue"
        }
    }

    isEmpty(){
        return this.front === null;
    }
}

module.exports = Queue;
