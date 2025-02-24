function add(num1, num2) {
//   return (Number(a) + Number(b)).toString(); // Fix me!
  let result = "";
  let carry = 0;
  
  //pad the shorter number with zeros to ensure equal length
  if (num1.length < num2.length) {
    num1 = "0".repeat(num2.length - num1.length) + num1;
  } else if (num2.length < num1.length) {
    num2 = "0".repeat(num1.length - num2.length) + num2;
  }
  
  //iterate through digits from right to left
  for (let i = num1.length - 1; i >= 0; i--) {
    let digit1 = parseInt(num1[i]);
    let digit2 = parseInt(num2[i]);
    let sum = digit1 + digit2 + carry;
    carry = Math.floor(sum / 10);
    result = (sum % 10) + result;
  }
  
  //add any remaining carry
  if (carry > 0) {
    result = carry + result;
  }
  
  return result;
}
