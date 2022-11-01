const palindromes = function (word) {
  let charArr = Array.from(word.toLowerCase());
  charArr = charArr.filter(char => char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122);
  for(let i = 0; i < charArr.length/2 ; i++){
    if(charArr[i] != charArr[charArr.length-1-i]){
      return false
    }
  }
  return true;
};

// Do not edit below this line
module.exports = palindromes;
