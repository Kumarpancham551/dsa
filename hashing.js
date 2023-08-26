class HashTable{
    constructor(size = 5){
        this.hashTable = new Array(size);
        this.currentSize = 0;
        this.MAX_LOD_FACTOR = 0.8;
    }
    hash(key){
        let sum = 0;
        for(let i=0; i<key.length;i++){
            sum += key.charCodeAt(i);
        }
        return sum % this.hashTable.length;
    }
    set(key,value){
        const index = this.hash(key);
        if(this.hashTable[index] == undefined){
            this.hashTable[index] = new Array(); 
        }
        this.hashTable[index].push([key,value]);
        this.currentSize++;

        let loadFactor = this.currentSize / this.hashTable.length;
        if(loadFactor > this.MAX_LOD_FACTOR){
            this.rehash();
            console.log("Reshasing Done")
        }
    }
    get(key){
        const index = this.hash(key);
        for(let i=0; i<this.hashTable[index].length; i++){
            if(this.hashTable[index][i][0] == key){
                return this.hashTable[index][i][1]
            }
        }
    }
    remove(key){
        const index = this.hash(key);
        for(let i=0; i<this.hashTable[index].length; i++){
            if(this.hashTable[index][i][0] == key){
                this.hashTable[index].splice(i,1);
                this.currentSize--;
            }
        }

    }
    print(){
        console.log(this.hashTable)
    }
    rehash(){
        let oldHashTable = this.hashTable;
        this.hashTable = new Array(2 * oldHashTable.length);  
        this.currentSize = 0
        for(let idx=0;idx<oldHashTable.length;idx++){
           if(oldHashTable[idx]){
            for(let element=0;element<oldHashTable[idx].length;element++){
                this.set(oldHashTable[idx][element][0],oldHashTable[idx][element][1]);
                
            }
           }
        }
    }
}

// const ht = new HashTable();
// ht.set("one",10)
// ht.set("two",20)
// ht.set("three",30)
// ht.set("four",40)
// ht.set("five",50)
// //console.log(ht.get("one"))
// // ht.remove("two")
//  ht.print()

// Question base on Hash

// Q. Find out max occurring character in a given string.: "abcedbcabacea"

function maxFrequency(str){
let st = new Map()
let maxFreq =0;
let maxFreChar = "";
for(let i=0;i<str.length;i++){
    st.set(str[i],(st.get(str[i])||0)+1)

    if(st.get(str[i])>maxFreq){
        maxFreq = st.get(str[i]);
        maxFreChar = str[i];
    }
}
return maxFreChar;
}

// let char = "abcedbcabacebbbbba";
// console.log(maxFrequency(char))

// Q. Given an array of integers and a number K is given, find the totral number of continous subarrys whose sum would be equals to 'K'

function subarrayWithSumK(arr,k){

    let count = 0;
    let mp = new Map()
    for(let i=1;i<arr.length;i++){
        arr[i] = arr[i] + arr[i-1];
    }
    for(let i=0;i<arr.length;i++){
        let y = arr[i];

        if(y == k){
            count++;
        }
        if(mp.has(y-k)){
            count = count + mp.get(y-k);
        }

        if(mp.has(y)){
            mp.set(y, mp.get(y)+1)
        }
        else{
            mp.set(y,1);
        }
    }
    return count;
}

let arr = [1,2,3,2,0,1];
let k = 3;
console.log(subarrayWithSumK(arr,k))


