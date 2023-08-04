//.1) Given two numbers A and B, You are supposed to find the sum of A and B without using the addition operator i.e. `+`

/*
function add(a,b){
    while(b != 0){
        let sum = a^b;
        let carry = (a&b)<<1;
        a = sum;
        b=carry;
    }
    console.log(a);
}
add(7,7)
*/

// 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 

//. 2)  Given a number A which is an even integer, you need to print two prime numbers whose sum will be equal to A.

/*
function isPrime(n){
    for(let i=2;i<=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
    }
    return true;
}
function sumPrime(n){
    for(let i=2;i<=n/2;i++){
        if(isPrime(i)&&isPrime(n-i)){
            console.log(i," ",n-i);
            return;
        }
    }
}

let num = 5;
sumPrime(num);

*/

// 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 

//3. sort array into 0,1 and 2.

/*
 let arr =  [1, 1, 1, 2, 0, 0, 0];

let start = mid = 0;
let end = arr.length-1;
let temp = 0;

while(mid<=end){
	if(arr[mid ]== 0){
		temp = arr[mid];
		arr[mid]=arr[start];
		arr[start] = temp;
		mid++;
		start++;
	}else if(arr[mid]==1){
		mid++;
	}else{
		temp = arr[mid];
		arr[mid]=arr[end];
		arr[end]=temp;
		end--;
	}
}
console.log(arr);

*/
// 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 

//4. Target Sum Pair in an Array
/*
var A = [0,1,2,4,-3,-2,5,6];

var x = 9;

//using hash map to find target sum pair
function targetSumPair(A,x){
	let curr = 0;//pointing to the current element in A
  let rem = 0;
  let ans = [];
  let m = new Set();
  while(curr<A.length){
  	rem = x - A[curr];
    if(m.has(rem)){
    	ans.push(rem);
      ans.push(A[curr]);
      return ans;
    }else{
    	m.add(A[curr]);
    }
  	curr++;
  }
  return ans;
}

var output = targetSumPair(A,x);
console.log(output);
*/
// 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5

//5. Given an array A with a number x. We need to write a function which takes array A and x as argument and return a triplet from
//the array A whose sum is equal to x. If no pair exists then return empty array.

/*
function findTriplet(arr, sum){
	arr.sort((a,b)=>a-b)

	for(let i=0;i<arr.length-2;i++){
		let l = i+1;
		let r = arr.length-1;
		while(l<r){
			if(arr[i]+arr[l]+arr[r]==sum){
				console.log("Triplet is " + A[i] + ", "
				+ A[l] + ", " + A[r])
				return true;
				
			}else if(arr[i]+arr[l]+arr[r]<sum){
					l++
			}else{
				r--;
			}
		}
	}
}

let A = [1,2,5,6,7,8,3 ];
let sum = 8;
findTriplet(A, sum);
*/
//6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6
/* 6. Given an array of non negative integers representing the height of each block where
the width of each block is 1, we need to find out maximum rain water that can be
trapped using blocks.
*/
/* 
var input = [3,0,2,0,4]
function trapWater(input){
	let ans = 0;//max water to be stored
  let n = input.length;
  let max_left = 0;
  let max_right = 0;
  let lo = 0;
  let hi = n-1;
  while(lo<hi){
  	if(input[lo]<input[hi]){
    	if(max_left<input[lo])
      	max_left = input[lo];
      ans += max_left-input[lo];
      lo++;
    }
    else
    {
    	if(max_right<input[hi])
      	max_right = input[hi];
      ans+=max_right-input[hi];
      hi--;
    }
  }
  return ans;
}

var output = trapWater(input);
console.log(output);

*/