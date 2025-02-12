var uniqueInOrder = function(iterable) {
    var arr = [];
    for (var i=0;i<iterable.length;i++) {
    // check if there is back to back letter
    if (iterable[i] !== iterable[i+1]) {
        // if not, push the current value to arr
      arr.push(iterable[i]);
    }
  }
  return arr;
}

// older code that did not include numbers or char
// var uniqueInOrder=function(iterable){
//   //your code here - remember iterable can be a string or an array
//   let string = iterable.split("");
//   let arr = [];
//   for (i = 0; i < iterable.length-1; i++) {
//     if (string[i] === string[i+1]){
//       if (arr.includes(string[i])) {
//         continue;
//       }
//       else {
//         arr.push(string[i]);
//       }
//     }
//     else {
//         if (!arr.includes(string[i])){
//             arr.push(string[i])
//         }
//         arr.push(string[i+1]);
//     }
//   }
//   return console.log(arr);
// }
// uniqueInOrder('AAAABBBCCDAABBB')
// uniqueInOrder('ABBCcAD')
// uniqueInOrder([1,2,2,3,3])
