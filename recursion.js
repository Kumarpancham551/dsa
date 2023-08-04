// Factorial of a number using recursion method

function Factorial(n){

        if(n==1 || n==2){
            return n
        }
        return n*Factorial(n-1)
    
}
//console.log(Factorial(5))

// Program to check if array is sorted

function isSorted(arr,i){
    if(i==arr.length-1){
        return true;
    }
    let value = isSorted(arr,i+1)
    return(arr[i]<=arr[i+1] && value)
    
    
    
}
//console.log(isSorted([1,2,4,4,5],0,))

// Friends Pairing Problem
function paring(n){
    if(n==1 || n==2){
        return n
    }
   return  paring(n-1)+ (n-1) * paring(n-2) 
}
 //console.log(paring(3))

// Tiling Problem

function ways(n){
    if(n==1 || n==2){
        return n;
    }
    return ways(n-1)+ways(n-2)
}

//console.log(ways(3))

/*
SubSequence: May not be contiguous but maintain the relative order.
Elements in the subsequence appear in the same order as they appear in the original array the only difference is that
they may not be contiguous 
*/

function subsequence(output,input){
    if(input == ""){
        console.log(output);
        return
    }

    let fos = input.charAt(0);
    let ros= input.substring(1); // return 1 to last string

    subsequence(output+fos, ros); // include
    subsequence(output,ros); // Exclude
}
 //subsequence("","abc");


/*
Problem statement
You are given a ‘n’ pair of parentheses, write a function to generate all combinations of well formed parentheses
*/

function parentthisPair(n,open,close,output){
    if(n==open && n==close){
        console.log(output);
        return;
    }
    if(n>open){
        parentthisPair(n,open+1,close,output+"(");
    }
    if(close<open){
        parentthisPair(n,open,close+1,output+")"); 
    }
}
// parentthisPair(3,0,0,"")

//----------------------------------------

//Lexicographical Printing Recursively
function lexioOrder(level,n){
    if(level>n){
       
        return;
    }
    console.log(level)
    let i = level?0:1;
    for(i;i<=9;i++){
        lexioOrder(level*10+i,n)
    }
}

//lexioOrder(0,15)

// string permutation

function strPermutation(input,output){
if(input==""){
    console.log(output);
    return;
}
    for(let i=0;i<input.length;i++){
        let char = input[i]
        let ros = input.substring(0,i)+input.substring(i+1);
        strPermutation(ros,char+output);
    }
}

// strPermutation("abc","");

 // you have 2D array(m*n)  we have to reach from top left cell to 
 // bottom right cell. find total way. condtion: you can only right or down
function totalway(l,r,ml,mr){
if(l==ml-1 && r == mr-1){
    return 1;
}
if(l>=ml || r >=mr){
    return 0
}
 return totalway(l+1,r,ml,mr)+totalway(l,r+1,ml,mr)
}
//console.log(totalway(0,0,3,3))