// Bubble sort
/*
function bubbleSort(inputArray) {
    for (var i = 0; i < inputArray.length; i++) {
        var isSwapped = false
        // Last i elements are already sorted
        for (var j = 0; j < (inputArray.length - i - 1); j++) {
            // Check if the current element is greater than the next element
            if (inputArray[j] > inputArray[j + 1]) {
                // If the condition is true then swap them
                var temp = inputArray[j]
                inputArray[j] = inputArray[j + 1]
                inputArray[j + 1] = temp
                isSwapped = true
            }
        }
        if (!isSwapped)
            break
    }
    return inputArray
}

const array = [6,2,33,4,39,6,11]; //Time complexity = O(n^2)
bubbleSort(array);                //space cmplexity = O(1)
console.log(array);
*/

// Selection Sort

//find minimu value and put it into begning

// function selectionSort(arr){
//     var minIndex=0;
//     for(let i=0;i<arr.length;i++){
//         minIndex=i;
//       for(let j=i+1;j<arr.length;j++){
//         if(arr[j]<arr[minIndex]){
//             minIndex = j;
//         }
//       }
//       var temp = arr[minIndex];
//       arr[minIndex]=arr[i];
//       arr[i]=temp;
//     }
// }
// arr=[56,45,23,9,12,76,21,11]; // Time Complexity = O(n^2)
// selectionSort(arr);           //Space Complexity = O(1)
// console.log(arr);


// Insertion Sort



//find minimu value and put it into begning

// function insertion(arr){
//     for(let i=1;i<arr.length;i++){
//         let curr = arr[i];
//         let j= i-1;
//         while(j>=0 && arr[j]>curr ){
          
//                 arr[j+1]=arr[j]
            
//             j--;
//         }
//         arr[j+1]=curr
      
//       }
      
    
// }
// arr=[56,45,23,9,12,76,21,11]; // Time Complexity = O(n^2)
// insertion(arr);           //Space Complexity = O(1)
// console.log(arr);


// Merge sort

function merge(arr,start,mid,end){
    let leftStart = start;
    let leftEnd = mid;
    let rightStart = mid+1;
    let rightEnd = end;
    let leftArr = new Array(leftEnd-leftStart + 1);
    let rightArr = new Array(rightEnd-rightStart+1);

    for(let i=0;i<leftArr.length;i++){
        leftArr[i] = arr[leftStart + i];
    }
    for(let i=0;i<rightArr.length;i++){
        rightArr[i]=arr[rightStart+i];
    }
    let aIdx = 0;
    let bIdx = 0;
    let rIdx = leftStart;
    while(aIdx<leftArr.length && bIdx < rightArr.length){
        if(leftArr[aIdx]<=rightArr[bIdx]){
            arr[rIdx] = leftArr[aIdx];
            rIdx++;
            aIdx++;
        } else{
            arr[rIdx] = rightArr[bIdx]
            rIdx++;
            bIdx++;
        }
    }
    while(aIdx<leftArr.length){
        arr[rIdx] = leftArr[aIdx];
            rIdx++;
            aIdx++;
    }
    while(aIdx<rightArr.length){
        arr[rIdx] = rightArr[bIdx]
            rIdx++;
            bIdx++;
    }
}

//console.log(merge([1,5,9,15],[3,6,7,8]))
function mergeSort(arr,l,r){
    // base case
    if(l>=r) return;

    const m =l+ parseInt((r-l)/2);
    mergeSort(arr,l,m); // sort left part
    mergeSort(arr,m+1,r); // sort right part
    // self work
    merge(arr,l,m,r);
}
// let arr = [5,4,1,3,89,23]
// mergeSort(arr,0,5)

// QUICK SORT
function placePivot(arr,start,end){
    let pivot = arr[end];
    let smaller = start-1;
    // let randpivot = Math.floor(Math.random() * (end - smaller + 1)) + smaller;
    // let pivot = arr[randpivot]  // randomized quick sort
    for(let i = start; i <end;i++){
     // console.log(arr)
        if(arr[i] <= pivot){
         // console.log(smaller)
            smaller++;
            let temp = arr[smaller];
            arr[smaller] = arr[i];
            arr[i]  = temp;
        }
    }
    // place pivot at right position
    let temp = arr[smaller + 1];
    arr[smaller+1]=arr[end];
    arr[end]=temp;
    return smaller + 1;
}
function quickSort(arr,start,end){
    if(start >= end){
        return
    }

    let pivotIdx = placePivot(arr,start,end);

    quickSort(arr,start,pivotIdx-1); // left arr
    quickSort(arr,pivotIdx+1,end);//right arr
}
// let arr = [5,4,1,3,89,23]
//  quickSort(arr,0,5)
// console.log(arr)

// problem based on sorting

// 1. K-closest point to the origin

x = [1,2,3,4];
y = [3,4,1,0];

k = 2;

function k_closest(x,y,k){
	let output = [];
  let n = x.length;
  let dist = new Array(n);
  for(let i=0;i<n;i++){
  	dist[i] = x[i]*x[i]+y[i]*y[i];
  }
  dist.sort((a,b)=>a-b);
  let k_dist = dist[k-1];
  for(let i=0;i<n;i++){
  	let temp = x[i]*x[i]+y[i]*y[i];
    if(temp<=k_dist){
    	output.push(x[i],y[i]);
    }
  }
  return output;
}

//console.log(k_closest(x,y,k));

// 2. Sort an array in wave form


var input = [9,8,7,6,5,21,2,4];

function sortwave(input){
	input.sort((a,b)=>a-b);
  let n = input.length;
  if(n>1){
  	for(let i=1;i<n;i+=2){
    	let temp = input[i];
      input[i] = input[i-1];
      input[i-1] = temp;
    }
    return input;
  }
  else{
  	return input;
  }
}
// console.log(sortwave(input));

// another apporach in time coplexity o(n)
var input = [9,8,7,6,5,21,2,4];

function wavesort(inp){
	let n = inp.length-1;
  let temp = 0;
	for(let i=0;i<n;i++){
  	if(i%2==0){
    	if(inp[i]<inp[i+1]){
      	temp = inp[i];
        inp[i] = inp[i+1];
        inp[i+1] = temp;
      }
    }else{
    	if(inp[i]>inp[i+1]){
      	temp = inp[i];
        inp[i] = inp[i+1];
        inp[i+1] = temp;
      }
    }
  }
  return inp;
}

// console.log(wavesort(input));

// Meeting rooms

var start = [1,3,0,6,8,4];
var finish = [2,4,6,7,9,9];

function maxMeeting(s,f){
	var pair = [];
  let n  = start.length;
  for(let i=0;i<n;i++){
  	pair.push([s[i],f[i]]);
  }
  pair.sort((a,b)=>a[1]-b[1]);
  let counter = 1;
  let limit = pair[0][1];
  for(let i=1;i<n;i++){
  	if(pair[i][0]>=limit){
    	counter++;
      limit = pair[i][1];
    }
  }
  return counter;
}

//console.log(maxMeeting(start,finish));

/*
Max Chunks To Make Array Sorted
Given an array of length n having elements in the range [0,n-1] in any order.We have to split the array into maximum
number of chunks and sort each chunk and concatenate them which should return a complete sorted array.Find the
maximum number of chunks that can be made
Example
Input:[1,0,4,3,2]
Output:2

*/

// var start = [1,0,4,3,2,5,9,7,8,6];
var start = [1,2,0,3];
function maxChunk(s){
	let maxi = 0;
  let n = s.length;
  let ans = 0;
  for(let i=0;i<n;i++){
  	maxi = Math.max(maxi,s[i]);
    if(maxi==s[i]){
    	//console.log(maxi," and i = ",s[i]);
      ans++;
    }
  }
  return ans;
}

//console.log(maxChunk(start));


