// Given an array of strings. You need to print all anagrams together. For example – 
// let data = [ "data", "atad", "number", "tada", "adat", "bernum"];

// let h = new Map();
// for(let i=0;i<data.length;i++){
//  let temp = data[i].split("").sort().join("");
//  if(h.has(temp)){
//     h.get(temp).push(data[i])
//  }else{
//     h.set(temp,[data[i]]);
    
//  }
// }
// console.log(h)


// -------------------------------------------------------------------------------

// Given a string. You need to print the first non-repeating character. For example –
// let str = "unacademy";

// let st = new Map();

// for(let i=0;i<str.length;i++){
//     if(st.has(str[i])){
//         st.set(str[i],st.get(str[i])+1)
//     }else{
//         st.set(str[i],1);
//     }
// }

// for(let i=0;i<str.length;i++){
//     if(st.has(str[i])==1){
//         console.log(str[i]);
//         break;
//     }
// }

// ----------------------------------------------------------------------

// Problem Given an array. You need to shift negative elements to the end of an array.
  // let data = [-5, 3, -4, 88, -9, -10, -21, 5, 6]

  // let start = 0;
  // let end = data.length-1;
  // while(start<end){
  //   if(data[start]<0){
  //       let temp =data[start];
  //       data[start] = data[end];
  //       data[end] = temp;
  //       end--;
  //       continue;
  //   }
  //   start++;
  // }
  // console.log(data);

// ----------------------------------------------------------------------
