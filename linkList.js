
// //   createing a node class

// // class Node{
// //     constructor(data){
// //         this.data=data;
// //         this.next=null;
// //     }
// // }

// // creating a singlylinklist class

// class singlylinkList{
//     constructor(){
//         this.head =null;
//         this.length=0
//     }
//     insertAtStart(data){
//         let newNode = new Node(data);
//         newNode.next=this.head;
//         this.head = newNode
//         this.length++
//     }
//     printLinkList(){
//         let current = this.head;
//         while(current){
//             console.log(current.data)
//             current=current.next
//         }
//     }
//     insertAtEnd(data){
//         let newNode = new Node(data);
//         // if empty, create head
//         if(this.head==null){
//             this.head = newNode
//             this.length++
//         }
//        else{
//         let current = this.head;
//         while(current.next){
//             current = current.next;
//         }
        
//         current.next = newNode;
//         this.length++;
//        }
//     }
//     insertAtIndex(data,index){
//         if(index==0){
//              this.insertAtStart(data)
//         }else if(index>this.length || index<0){
//             console.log("Invalid index ")
//          }else{
//             let newNode = new Node(data)
//             let count = 0;
//             let curr = this.head;
//             let prev;
//             while(count<index){
//                 prev=curr
//                 curr = curr.next;
//                 count++;
//             }
//             newNode.next=curr
//             prev.next=newNode;
//            this.length++
//         }
//     }
//     getElement(index){
//         if(index<0 || index>this.length){
//             console.log("Invalid index ")
//         }else{
//             let count = 0
//             let curr = this.head;
//             while(curr){
              
//                 if(count==index){
//                     console.log(curr.data)
//                 }
//                 count++
//                 curr=curr.next
//             }
//         }
//     }
//     removeAtStart(){
//         if(!this.head){
//             return false;
//         }
//         let temp = this.head;
//         this.head = this.head.next;
//         temp = null;
//         this.length--;
//     }
//     removeAtIndex(index){
//        if(index == 0){
//          this.removeAtStart();
//        }else if(index<0 || index>=this.length){
//             console.log("Invalid index ")
//         }else{
//             let count = 0
//             let curr = this.head;
//             while(curr){
//                 if(count==index){
//                     let temp = curr.next;
//                    curr.next = curr.next.next;
//                    temp =null;
//                    this.length--;
//                 }
//                 count++
//                 curr=curr.next
//             }
//         }
//     }
//     size(){
//         console.log(this.length)
//     }
// }

// // let ll = new singlylinkList();
// // ll.insertAtStart(1000)
// // ll.insertAtEnd(800);
// // ll.insertAtEnd(600);
// // //ll.size();
// // ll.insertAtIndex(50,2)
// // ll.insertAtIndex(90,1)
// // //ll.getElement(0)
// // //ll.removeAtStart();
// // ll.removeAtIndex(3);
// // ll.printLinkList();


// // DOUBLY LINKED LIST

// class Node{
//     constructor(data){
//         this.data= data
//         this.next = null
//         this.prev = null
//     }
// }

// class DoublyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail=null;
//         this.length=0;
//     }
//     insertAtStart(data){
//         let newNode = new Node(data);
//         if(this.head == null || this.length == 0){
//             this.tail=newNode
//         }
//         if(this.head != null){
//             this.head.prev=newNode;
//         }
//         newNode.next=this.head;
//         this.head = newNode;
//         this.length++;
//     }
//     insertAtEnd(data){
//         let newNode = new Node(data);
//         if(this.head==null||this.length==0){
//             this.insertAtStart(data);
//         }
//         this.tail.next = newNode; 
//         newNode.prev=this.tail;
//         this.tail = newNode;
//         this.length++;
//     }
//     insertAtPosition(index,data){
//         if(this.head == null || index>this.length){
//             console.log("Invalid position");
//             return;
//         }
//         if(index == 0){
//             this.insertAtStart(data)
//         }
//         else if(index==this.length){
//            this.insertAtEnd(data)
//         }else{
//             let temp=0;
//             let curr = this.head;
//             let previous= null;
//             while (temp<index) {
//                 previous = curr;
//                curr=curr.next 
//                temp++;
//             }
//             let newNode=new Node(data);
//             previous.next = newNode;
//             newNode.prev=previous;
//             newNode.next=curr;
//             curr.prev=newNode;
//             this.length++
//         }
//     }
//     deleteAtStart(){
//         if(this.head==null){
//             return;
//         }
//         let temp = this.head;
//         this.head=this.head.next;
//         this.head.prev=null
//         temp=null;
//         this.length--;
//     }
//     deleteAtEnd(){
//         if(this.length==null){
//             return;
//         }
//         let temp = this.tail;
//         this.tail = this.tail.prev;
//         this.tail.next = null;
//         temp=null
//         this.length--
//     }
//     deleteATX(x){
//         if(this.head==null || x>=this.length){
//             console.log("invalid index")
//             return
//         }
//         if(x==0) this.deleteAtStart()
//         else if(x==this.length-1) this.deleteAtEnd()
//         else{
//             let curr=this.head;
//             let previous = null;
//             let temp =0;
//             while(temp<x){
//                 previous= curr;
//                 curr=curr.next;
//                 temp++
//             }
//             previous.next=curr.next;
//             curr.next.prev = previous;
//             curr=null;
//             this.length--;
//         }
//     }
//     print(){
//         let curr = this.head;
//         while(curr){
//             console.log(curr.data)
//             curr=curr.next
//         }
//         //console.log(this.length)
//     }
// }


// let dll = new DoublyLinkedList;
// dll.insertAtStart(10)
// dll.insertAtEnd(20)
// dll.insertAtStart(5)
// dll.insertAtEnd(35)
// dll.insertAtPosition(1,200)
// dll.print();
// //dll.deleteAtStart()
// //dll.deleteAtEnd()
// dll.deleteATX(3)
// console.log("---------")
// dll.print();


// Doubly Linked list

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class circularLinkedList{
    constructor(){
        this.tail = null;
        this.length = 0;
    }
    insertIntoEmpty(data){
        if(this.tail != null){
            return this.tail
        }
        let newNode = new Node(data);
        this.tail=newNode;
        this.tail.next = newNode;
        this.length++
        return this.tail;
    }
    insertAtStart(data){
        if(this.tail==null){
           return  this.insertIntoEmpty(data)
        }
        let newNode = new Node(data)
        newNode.next = this.tail.next
        this.tail.next = newNode;
        this.length++
        return this.tail
    }
    insertAtEnd(data){
        if(this.tail==null){
           return  this.insertIntoEmpty(data)
        }
        let newNode = new Node(data)
        newNode.next = this.tail.next
        this.tail.next = newNode;
        this.tail = newNode
        this.length++
        return this.tail
    }
    printCircularList(){
        if(this.tail == null){
            return;
        }
        let curr = this.tail.next;

        do{
            console.log(curr.data)
            curr=curr.next;
        }while(curr != this.tail.next)
    }
    inserAtPosition(x,data){
        if(x<0 || x > this.length){
            console.log("invalid index")
            return;
        }
        if(x == 0){
            return this.insertAtStart(data);
        }
        if(x == this.length){
            return this.insertAtEnd(data)
        }
        let currIdx = 0;
        let prevNode = null;
        let currNode = this.tail.next;

        while(currIdx < x){
            prevNode = currNode;
            currNode = currNode.next;
            currIdx++;
        }
        let newNode = new Node(data);
        newNode.next = currNode;
        prevNode.next = newNode;
        this.length++;
    }

}

let cll = new circularLinkedList();

cll.insertIntoEmpty(10)
cll.insertAtStart(20);
cll.insertAtEnd(40)
cll.printCircularList()


