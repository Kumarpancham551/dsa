

// Q. Given a string s and a pattern p. You have to find, how many times pattern p occured in str s: EX: s -> AABBBCBBAABCAB; p -> ABC


// Naive Approach 

function stringMatching(str,pattern){
let n = pattern.length;
let m = str.length;
let count = 0;
for(let i=0;i<=m-n;i++){
    let flag = true;
    for(let j=0;j<n;j++){
        if(str[j+i] !== pattern[j]){
            flag = false;
            break;
        }
    }
    if(flag){
        count++;
    }
}
return count;
}

let s = "ABABCBBAABCAB";
let p = "ABC";

// console.log(stringMatching(s,p))
/* rabinKarp algo */
function rabinKarp(str,pattern){
    let p = 37;
    let mod = 1000000007 // 10 ^ 9 + 7;

    let power = [];
    power[0] = 1; // power store kar rhe hai
    for(let i=1;i<str.length;i++){
        power[i] = (power[i-1]*p) % mod;
    }  
    let hashPattern =0; // pattern ka hash code generate kar rhe  hai
    for(let i=0;i<pattern.length;i++){
        let curr_char_hash = (pattern.charCodeAt(i)*power[i])%mod;
        hashPattern = (hashPattern + curr_char_hash)%mod;
    }

    

    let hashArr = [0]; // string ka hash code generate kar rhe hai
    for(let i=0;i<str.length;i++){
        let curr_char_hash = (str.charCodeAt(i)*power[i])%mod;
        hashArr[i+1] =(hashArr[i] + curr_char_hash)%mod;

    }
    let count = 0;
    for(let i=0;i<str.length-pattern.length;i++){
        let curr_substr_hash = (hashArr[i+pattern.length] - hashArr[i]+ mod)%mod; // pattern length ke equal sting char ka hascode ka sum nikal rhe hai
        if(curr_substr_hash == (hashPattern * power[i])%mod){ // hashPattern * power[i] ----> string ke har window ka hash code alg hoga kyuki har ek window ko ek alg constant(p^i) se multiply kar rhe hai
            count++;                            // agr hum power[i] se hashPattern ko multiply krte hai to string ke us window ke equal value hoga agr pattern match huwa to
        }
    }
    return count;
}

//console.log(rabinKarp(s,p))

/* Write a function which store prefix of string(lps algo) */

function lps(str){
    let lps = [];
    lps[0]  = 0;
    let len = 0;

    for(let i=1;i<str.length;){
        if(str[len] == str[i]){
            len++;
            lps[i]=len;
            i++;
        }else{
            if(len == 0){
               lps[i] = 0;
               i++; 
            }else{
                len = lps[len-1]
            }
        }
    }
    return lps;

}

// let str = "acabacace";
// console.log(lps(str))
 