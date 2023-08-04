class Stack{
    constructor(){
        this.data=[];
        this.top=-1;
    }
    isEmpty(){
        return this.top <= -1;
    }
    push(element){
        this.top++;
        this.data[this.top]=element
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is under flow")
            return;
        }
        this.top--;
    }
    peek(){
        if(this.isEmpty()){
            console.log("stack is empty")
            return;
        }
        return this.data[this.top]
    }
    // insert at the bottom without taking extra space
     insertAtBottom(ele){
        if(this.isEmpty()){ // base condition
            this.push(ele);
            return;
        }
        let x= this.peek();
        this.pop()
        this.insertAtBottom(ele)
        this.push(x)
     }

     // reverse stack

     reverse(){
        if(this.isEmpty()){
            return;
        }
        let temp = this.peek();
        this.pop();
        this.reverse()
        this.insertAtBottom(temp)
     }
    
     
}

// let myStack = new Stack()
// myStack.push(5)
// myStack.push(6)
// myStack.push(7)
// myStack.push(8)
// myStack.push(9)
// console.log(myStack.peek())
// myStack.insertAtBottom(500);
// console.log(myStack.peek())

function  checkParentheses(str){
    const st = new Stack();

    for(const ch of str){
        if(ch == '(' || ch == '{' || ch == '['){
            st.push(ch)
        }
        else if(ch == ')' ){
            if(st.peek() == '('){
                st.pop()
            }else{
                return false
            }

        }
        else if(ch == '}' ){
            if(st.peek() == '{'){
                st.pop()
            }else{
                return false
            }

        }
        else if(ch == ']' ){
            if(st.peek() == '['){
                st.pop()
            }else{
                return false
            }

        }
    }
    return st.isEmpty();
}
//console.log(checkParentheses('[{()}]'))

// find next greater element of stack

function nextGreater(arr,n){
    let st = new Stack();
    for(let idx=0;idx<n;idx++){
        let currEle = arr[idx];

        if(!st.isEmpty()){
            let topEle = st.peek();
            while(topEle<currEle){
                console.log(topEle, "-->", currEle);
                st.pop();
                if(st.isEmpty()){
                    break;
                }
                topEle = st.peek();
            }
        }
        st.push(currEle);
    }
    while(!st.isEmpty()){
        let topEle = st.peek();
        console.log(topEle, "-->", -1);
        st.pop();
    }
}

// let arr = [2,7,3,5,4,6,8]
// let n=7;
// nextGreater(arr,n)

// Remove duplicate string

function removeDuplicate(str){
    let st = new Stack();
    for(let ch of str){
        if(!st.isEmpty()){
            let topEle = st.peek();
            if(topEle === ch){
                st.pop()
            }else{
                st.push(ch)
            }
        }else
        st.push(ch)
    }
    let res = ''
    while(!st.isEmpty()){
        res+=st.peek();
        st.pop()
    }
    console.log(res)
}

removeDuplicate("aabcaabb")


