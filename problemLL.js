
//   createing a node class

class Node{
    constructor(data){
        this.data=data;
        this.next=null;
    }
}

function reverse(node) {
    var prev = null;
    var current = node;
    var next = null;
        while (current != null) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next;
        }
        node = prev;
        return node;
    }

function   printLinkList(head){
    let current = head;
    while(current){
        console.log(current.data)
        current=current.next
    }
}
function fold(head){
    let slow = head;
    let fast = head.next;
    while(fast != null && fast.next != null){
        slow = slow.next;
        fast = fast.next.next
    }
    let first = head;
    let second = reverse(slow.next);
    slow.next=null
    while(second){
        let temp1= first.next;
        let temp2 = second.next
        first.next = second;
        second.next=temp1;
        first=temp1
        second = temp2
    }
    printLinkList(head)
}
function detectCycle(head){
let curr=head;
let slow = fast = head;
while(curr){
    slow=slow.next;
    fast=fast.next.next;
    if(fast == null && fast.next == null){
        console.log("This link don't have circle")
        return;
    }
    if(fast.data == slow.data){
        console.log("this link have circle",fast.data);
        break;
    }
    let curr = head;
    while(curr){
        if(curr.data == slow.data){
            console.log(curr.data)
            return;
        }
        curr=curr.next;
        slow=slow.next.next
    }
}
}
head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);

head.next.next.next.next.next = head.next.next;

//head = reverse(head)
//printLinkList(head)
//fold(head)
detectCycle(head)




