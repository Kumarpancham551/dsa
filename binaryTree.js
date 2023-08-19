let Queue = require('./queue')



class Node {
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);
// root.left.left = new Node(40);
// root.left.right = new Node(50);
// root.right.right = new Node(60);

// function preOrderTraversal(root){
//     if(root == null) return; // Base case  Rt L R

//     console.log(root.data);
//     preOrderTraversal(root.left);
//     preOrderTraversal(root.right);
// }

// //  preOrderTraversal(root)

// function postOrderTraversal(root){
//     if(root == null) return; // Base case L R Rt

 
//     postOrderTraversal(root.left);
//     postOrderTraversal(root.right);
//     console.log(root.data);
// }

// // postOrderTraversal(root)


// function inOrderTraversal(root){
//     if(root == null) return; // Base case L Rt R

 
//     inOrderTraversal(root.left);
//     console.log(root.data);
//     inOrderTraversal(root.right);
// }
// // inOrderTraversal(root)

// /**    BINARY SEARCH TREE  */


// function insertInBST(root,data){

//     if(root == null){
//         root = new Node(data)
//         return root;
//     }
//     if(data < root.data){
//        root.left = insertInBST(root.left,data)
//     }else{
//         root.right = insertInBST(root.right,data)
//     }
// return root
// }

// function minValue(root){
//     if(root == null){
//         return NaN
//     }
//     while(root.left != null){
//         root = root.left;
//     }
//     return root.data
// }

// function deleteInBst(root,data){
//     if(root == null){
//         return;
//     }
//     if(data < root.data){
//         root.left = deleteInBst(root.left, data);
//     }
//     else if(data > root.data){
//         root.right = deleteInBst(root.right, data);
//     }
//     else if(root.left != null && root.right != null){ // node have 2 chlid 
//       // found the node to delete
//       root.data = minValue(root.right);
//       root.right  = deleteInBst(root.right,root.data);

//     }
//     else if (root.left != null || root.right != null){  // node have only one chlid
//         root = root.left || root.right;
//     }else{
//       root = null  
//     }
//     return root;
// }

// // let bst = new Node(10)
// // insertInBST(bst,100)
// // insertInBST(bst,5)
// // insertInBST(bst,15)
// // insertInBST(bst,1)
// // //inOrderTraversal(bst)
// // deleteInBst(bst,19)
// // console.log("--------")
// // inOrderTraversal(bst)

// let bst = new Node(10);
// bst.left = new Node(5);
// bst.right = new Node(14);

// bst.left.left = new Node(3);
// bst.left.left.left = new Node(1);
// bst.left.left.right = new Node(4);

// bst.left.right = new Node(8);
// bst.left.right.left = new Node(6);
// bst.left.right.left.right = new Node(7);
// bst.left.right.right = new Node(9);

// bst.right.left = new Node(13);

// inOrderTraversal(bst)
// deleteInBst(bst,5)
// console.log("--------")
// inOrderTraversal(bst)


/* QUESTION BASED ON BINARY */

// Level order traversing

function printLevelK(root,currLevel,levelToPrint){ // only print levelToPrint level data
    if(root == null) return;
 
    if(currLevel === levelToPrint){
      console.log(root.data);
      return;
       }
 printLevelK(root.left,currLevel+1,levelToPrint)
 printLevelK(root.right,currLevel+1,levelToPrint)
}
// wite a function to calculate hight of tree
function hightOfTree(root){
    if(root == null) return -1;
    let leftSubTreeHeight = hightOfTree(root.left);
    let rightSubTreeHeight = hightOfTree(root.right);

    let currHeight = Math.max(leftSubTreeHeight,rightSubTreeHeight)+1
    return currHeight
}
// Write a function to print all level
function printAllLevels(root){
    let lastlevel = hightOfTree(root)
    for(let i=0;i<=lastlevel;i++){
        printLevelK(bst,0,i);
        console.log("------------------")
    }
}

// optimzation of level order traversing
function levelOrderOptimized(root){
   if(!root) return;
   let queue = new Queue();
   queue.enqueue(root);
   queue.enqueue(null);
   while(!queue.isEmpty()){
        let n = queue.getFront();
        queue.dequeue();
        if(n == null){
            console.log("-------------");
            if(!queue.isEmpty()){
                queue.enqueue(null)
            }
            continue;
        }
        console.log(n.data);
        if(n.left != null){
            queue.enqueue(n.left)
        }
        if(n.right != null){
            queue.enqueue(n.right)
        }
   }
   
}
let bst = new Node(10);
bst.left = new Node(20);
bst.right = new Node(30);

bst.left.left = new Node(40);
bst.left.right = new Node(50);
bst.right.right = new Node(60);

//printLevelK(bst,0,1)
//console.log(hightOfTree(bst))
//printAllLevels(bst)

//levelOrderOptimized(bst)
