
const obj={
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5
}
function rabinKarp(str,pattern){
    let p = 5;
    let mod = 1000000007 // 10 ^ 9 + 7;

    let power = [];
    power[0] = 1;
    for(let i=1;i<str.length;i++){
        power[i] = (power[i-1]*p) % mod;
    }  
    console.log(power, "power")
    let hashPattern =0;
    for(let i=0;i<pattern.length;i++){
        let curr_char_hash = (obj[pattern[i]]*power[i])%mod;
        hashPattern = (hashPattern + curr_char_hash)%mod;
    }
    console.log(hashPattern," hascode of pattern")

    let hashArr = [0];
    for(let i=0;i<str.length;i++){
        let curr_char_hash = (obj[str[i]]*power[i])%mod;
        hashArr[i+1] =(hashArr[i] + curr_char_hash)%mod;
        console.log(hashArr[i]," -> ",obj[str[i]], "*", power[i], hashArr[i+1])

    }
    console.log(hashArr)
    let count = 0;
    for(let i=0;i<str.length-pattern.length;i++){
        let curr_substr_hash = (hashArr[i+pattern.length] - hashArr[i]+ mod)%mod;
        if(curr_substr_hash == (hashPattern * power[i])%mod){
            count++;
        }
    }
    return count;
}


let s = "aabcdebcdabc"
let p = "abcd"
console.log(rabinKarp(s,p))