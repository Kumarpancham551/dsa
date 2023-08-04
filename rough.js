function insertion(arr){
for(let i =1;i<arr.length;i++){
    let curr = arr[i];
    let j = i-1;
    while(j>=0 && curr<arr[j]){
        arr[j+1]=arr[j]
        j--;
    }
   arr[j+1]=curr 
}
}



const array = [1,2,3,4,5,6]; //Time complexity = O(n^2)
insertion(array);           //space cmplexity = O(1)
console.log(array);
 