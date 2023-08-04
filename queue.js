class Queue {
    constructor(length = 5){
        this.data = [];
        this.front = -1;
        this.rear = -1;
        this.maxLength = length;
        this.currLength = 0;
    }

    size(){
        return this.currLength;
    }
    isEmpty(){
        return this.currLength == 0
    }
    enqueue(value){
        // 1st way using current length
        if(this.size() === this.maxLength){
            throw new Error("queue overflow")
        }
        // 2nd way using front and rear
        if((this.rear+1)%this.maxLength == this.front){
        throw new Error("queue overflow")
        }
        if(this.front == -1 ){
            this.front = (this.front + 1)%this.maxLength
        }
        this.rear=(this.rear+1)%this.maxLength;
        this.data[this.rear] = value;
        this.currLength++
    }
    dequeue(){
        if(this.currLength == 0){
            throw new Error("Queue is underflow")
        }
        if(this.front == this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
        this.front = (this.front+1)%this.maxLength;
        }
        this.currLength--;
    }
    getFront(){
        if(this.front == -1 || this.currLength == 0){
            throw new Error('Queue is empty')
        }
        return this.data[this.front]
    }
}

let myQueue = new Queue(10);
// myQueue.enqueue(20)
// console.log(myQueue.getFront())

/** DEQUE */

class Deque{
    constructor(length = 5){
        this.data = [];
        this.front = -1;
        this.rear = -1;
        this.length = length;
        this.currLength = 0;
    }

    size(){
        return this.currLength;
    }
    isEmpty(){
        return this.currLength == 0;
    }
    enqueueAtFront(value){
        if(this.currLength == this.length){
            throw new Error("queue overflow")
        }
        if(this.front == -1){
          this.front = 0;
          this.rear = 0; 
        }
        else{
            this.front = (this.front-1+this.length)%this.length;
        }
        this.data[this.front] = value;
        this.currLength++;
    }
    enqueueAtRear(value){
            // 1st way using current length
            if(this.size() === this.maxLength){
                throw new Error("queue overflow")
            }
            if(this.isEmpty()){
                this.front = 0;
                this.rear = 0;
            }else{
                this.rear=(this.rear+1)%this.maxLength;
            }
            this.data[this.rear] = value;
            this.currLength++
    }
    dequeueFromFront(){
        if(this.isEmpty()){
            throw new Error("Queue underflow")
        }
        if(this.front = this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            this.front = (this.front + 1)%this.length
        }
        this.currLength--;
    }
    dequeueFromRear(){
        if(this.isEmpty()){
            throw new Error("Queue underflow")
        }
        if(this.front = this.rear){
            this.front = -1;
            this.rear = -1;
        }else{
            this.rear = (this.rear-1+this.length)%this.length
        }
        this.currLength--
    }
    getFront(){
        if(this.isEmpty()){
            throw new Error("Queue is underflow")
        }
        return this.data[this.front]
    }
    getRear(){
        if(this.isEmpty()){
            throw new Error("Queue is underflow")
        }
        return this.data[this.rear]
    }
}

let myDeque = new Deque();
myDeque.enqueueAtFront(10);
// console.log("size", myDeque.size());
// console.log("front", myDeque.getFront());
// console.log("rear", myDeque.getRear());
// console.log("---------")
// myDeque.enqueueAtRear(40);
// console.log("size", myDeque.size());
// console.log("front", myDeque.getFront());
// console.log("rear", myDeque.getRear());


// Problem on Queue

/**  Problem 1: First Non-Repeating Character  */

let input = "abad";


function findNorRepeating(input){
    let arr = new Array(26).fill(0)
    let q = new Queue(26)
    for(let i=0;i<input.length;i++){
        let ch = input[i]
        let indexOfCh = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        arr[indexOfCh]++;

        if(arr[indexOfCh]==1){
            q.enqueue(ch)
        }else{
            while(!q.isEmpty() &&
            arr[q.getFront().charCodeAt(0)- 'a'.charCodeAt(0)]>1){
                q.dequeue()
            }
        }
    }
    if(q.isEmpty()){
        console.log("-1")
    }else{
        console.log(q.getFront())
    }
}

// findNorRepeating(input)

