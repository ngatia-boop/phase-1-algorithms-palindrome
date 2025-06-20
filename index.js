function isPalindrome(word) {
 //step 1: reverse the string 
 const reversedWord = word.split('').reverse().join('');

 //step 2: compare reversed word with the original 
 return word === reversedWord;
}

// test cases
console.log(isPalindrome("madam")); //true
console.log(isPalindrome("robot"));     // false
console.log(isPalindrome("racecar"));   // true
console.log(isPalindrome("a"));         // true
console.log(isPalindrome("ab"));        // false
console.log(isPalindrome("abba"));      // true
/* 
  Add your pseudocode here
1. Define a function isPalindrome that takes a string as an argument.
2. Reverse the string.
3. Compare the reversed string to the original string.
4. If they are the same, return true.
5. If not, return false.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
