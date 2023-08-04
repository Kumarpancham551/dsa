
 // SORTING

 // BINARY SEARCH
 // Iterative approch
 function binarySearch(sortedArray, key){
    let start = 0;
    let end = sortedArray.length - 1;
  
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
  
        if (sortedArray[middle] === key) {
            // found the key
            return middle;
        } else if (sortedArray[middle] < key) {
            // continue searching to the right
            start = middle + 1;
        } else {
            // search searching to the left
            end = middle - 1;
        }
    }
  // key wasn't found
    return -1;
  }
  
  // recursive approach
  function binarySearch(sortedArray, key){
    return binarySearchHelper(sortedArray, key, 0, sortedArray.length-1)
  }
  
  function binarySearchHelper(sortedArray, key, start, end){
     
     if(start > end) return -1;
     
     let middle = Math.floor((start + end) / 2);
  
     if (sortedArray[middle] === key) {
         // found the key
         return middle;
     } else if (sortedArray[middle] < key) {
         // continue searching to the right
         binarySearchHelper(sortedArray, key, mid+1, end)
         
     } else {
         // search searching to the left
         binarySearchHelper(sortedArray, key, mid, end-1)
     }
     
  
  }


// Question based on binary sort
  /* Q(1)
Pair of Topics
The aim is to discover the number of pairs of indices {i, j} in two integer arrays A[] and B[]
 of equal size such that A[i] + A[j] > B[i] + B[j] and i < j.
*/

// Javascript program to find the number of indices pair
// such that pair sum from first Array
// is greater than second Array
 
 
// Function to get the number of pairs of indices
// {i, j} in the given two arrays A and B such that
// A[i] + A[j] > B[i] + B[j]
function getPairs(A, B, n)
{
    // Initializing the difference array D
    let D = new Array(n);
 
    // Computing the difference between the
    // elements at every index and storing
    // it in the array D
    for (let i = 0; i < n; i++) {
        D[i] = A[i] - B[i];
    }
 
    // Sort the array D
    D.sort((a, b) => a - b);
 
    // Variable to store the total
    // number of pairs that satisfy
    // the given condition
    let total = 0;
 
    // Loop to iterate through the difference
    // array D and find the total number
    // of pairs of indices that follow the
    // given condition
    for (let i = n - 1; i >= 0; i--) {
 
        // If the value at the index i is positive,
        // then it remains positive for any pairs
        // with j such that j > i.
        if (D[i] > 0) {
            total += n - i - 1; 
        }
 
        // If the value at that index is negative
        // then we need to find the index of the
        // value just greater than -D[i]
        else {
            let k = binary_search(D, 0, D.length, -D[i])
            total += n - k;
        }
    }
    return total;
}
 
function binary_search(a, low, high, element)
{
    while(low < high){
        let middle = low +  Math.floor((high - low)/2);
        if(a[middle] > element)
            high = middle;
        else
            low = middle + 1;
    }
    return low;
}

//----------------------------------------------------
/*2
Given a positive number n and precision p, find the square root of the number upto decimal places using binary search. 
Examples: 
Input : number = 50, precision = 3
Output : 7.071
Input : number = 10, precision = 4
Output : 3.1622
*/

// JavaScript program implementation to find
// square root of given number
// upto given precision using
// binary search.
 
    // Function to find square root
    // of given number upto given
    // precision
    function square_Root(number, precision)
    {
        let start = 0, end = number;
        let mid;
   
        // variable to store the answer
        let ans = 0.0;
    
        // for computing integral part
        // of square root of number
        while (start <= end)
        {
            mid = (start + end) / 2;
            if (mid * mid == number)
            {
                ans = mid;
                break;
            }
   
            // incrementing start if integral
            // part lies on right side of the mid
            if (mid * mid < number) {
                
                start = mid + 1;
                ans = mid;
            }
   
            // decrementing end if integral part
            // lies on the left side of the mid
            else {
                end = mid - 1;
            }
        }
        // For computing the fractional part
        // of square root upto given precision
        let increment = 0.1;
        for (let i = 0; i < precision; i++) {
            while (ans * ans <= number) {
                ans += increment;
               
            }
   
            // loop terminates when ans * ans > number
            ans = ans - increment;
            increment = increment / 10;
        }
        return ans;
    }
    square_Root(50,3)

    //---------------------------------------------------------

    /* Q(3)
    Farmer Vijay has a larger barn, with ‘n’ stalls. The stalls are located at the position from ‘b1…….bn’ along a straight line. His cows
‘c’ are not interested in his barn layout and become aggressive towards each other once put into a stall, to avoid the cows
getting hurt each other. The Farmer wishes to assign the cows to stalls, such that the minimum distance between any two of
them is as large. Find the largest minimum distance.

 */
let n = 5;//No of stalls
let c = 3;//No of cows

function check(num, stallArr) {
    let cows = 1,
        pos = stallArr[0];
    for (let i = 1; i < n; i++) {
        if (stallArr[i] - pos >= num) {
            pos = stallArr[i];
            cows++;
            if (cows == c) return 1;
        }
    }
    return 0;
}

function binarySearch(stallArr) {
    let start = 0,
        end = stallArr[n - 1],
        max = -1;
    while (end > start) {
        let mid = Math.floor((start + end) / 2);
        if (check(mid, stallArr) == 1) { 
            if (mid > max) max = mid;
            start = mid + 1;
        } else end = mid;
    }
    return max;
}
//console.log("The minimum Distance = " + binarySearch([1, 2, 4, 8, 9]));

//----------------------------------------------------------------------

/* Q(4)
We are given the ‘n’ number of books arranged in sorted order. Where each book has a different number of pages.
You have to allocate books to ‘s’ count of students so that the maximum number of pages allotted to a student is
minimum.

*/
function isAllocationPosible(arr,mid,s){
    let sum=0;
    s--;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>mid) return false
        if(sum+arr[i]>mid){
            s--;
            sum=arr[i]
            if(s<0) return false
        }else{
            sum += arr[i]
        }
    }
    return true;
}
function bookAllocation(arr,len,s){
     let sum = 0;
     for(let i=0;i<len;i++){
        sum += arr[i] 
     }
     let start = arr[len-1]
     let end = sum;
     let ans= Number.MAX_VALUE;
     while(start<=end){        
        let mid = Math.floor((start+end)/2)
        let isAbletoAllocate = isAllocationPosible(arr,mid,s)
        if(isAbletoAllocate){
         ans=Math.min(ans,mid)
            end = mid-1
        }else{
           start = mid+1
          
        }
       
     }
     return ans;
}
 //let arr = [12, 34, 67, 90];//Array of Books
let s = 2; //No. of students
// console.log("Minimum number of pages = " + bookAllocation(arr, arr.length, s))

/*
Q(5)
You are provided with ‘n’ number of boards of length [b1, b2,..bn].There are ‘a’ painters available in the market and each painter
takes one(1) unit time to paint one(1) unit of board. We need to find the minimum time to get the job done under the constraints
that any painter will only paint contiguous sections of the board.
*/




function numberofPainters(arr, n, maxLen) {
    let total = 0, paintersCount = 1;

    for (let i = 0; i < n; i++) {
        total += arr[i];

        if (total > maxLen) {
            total = arr[i];
            paintersCount++;
        }
    }
    return paintersCount;
}

function partition(arr, n, a) {
    let low = Math.max(...arr);
    let high = arr.reduce((a, b) => a + b)
    while (low < high) {
        let mid = Math.floor(low + (high - low) / 2);
        let requiredPainters = numberofPainters(
            arr, n, mid);

        if (requiredPainters <= a)
            high = mid;
        else
            low = mid + 1;
    }
    return low;
}

let arr = [10, 20, 30, 40] //[1, 2, 3, 4, 5, 6, 7, 8, 9];//Array of boards
// let n = arr.length;
let a = 2//3;//No of painters
console.log('Minimum time taken is ' + partition(arr, n, a)+ ' units');