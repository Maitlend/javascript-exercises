const reverseString = function(inputString) {
  let charArray = inputString.split("");
  for(let i = 0; i<charArray.length/2; i++){
    let currChar = charArray[i];
    charArray[i] = charArray[(charArray.length-1)-i];
    charArray[(charArray.length-1)-i] = currChar;
  }
  return charArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
