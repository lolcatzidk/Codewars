function alphabetPosition(text) {
  justLetters = text.replace(/[^a-z]/gi,""); //removes everything that is not a letter
  // [^a-z] -> Matches anything that is NOT a letter.
  // g -> Global flag (affects the whole string).
  // i -> Case-insensitive (treats uppercase and lowercase the same).. for later use
  
  let result = "";
  
  for (let i = 0; i<justLetters.length; i++) {
    result += getLetterNum(justLetters.charAt(i)); //Concatenates the resulting number (with a space) to newText
  }
  
  return result.trim(); //the space at the beginning is trimmed with this
}
function getLetterNum(letter) {
  const alphabetArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  const index = alphabetArray.indexOf(letter.toLowerCase()); //Finds the index of the letter in alphabetArray
  
  return (index >= 0) ? " " + (index+1) : ""; 
  //If the letter is found, return " " (a space) followed by index + 1.
  //If the letter is NOT found, return an empty string "".
}
