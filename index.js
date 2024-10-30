function isPalindrome(word) {
  // Write your algorithm here
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] !== word[word.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

/* 
  Add your pseudocode here
  // when the function isPalindrome receives its argument, a string, it should return true if the
  // first half of the string is equal to the reverse of the second half, otherwise it should return false.
  //I am going to write a for loop that matches the characters from the first half of the string to the reverse
  //of the second half of the string. if they dont match the loop ends and returns false. if they match, the loop
  //moves on to the next pair of characters.

  declare function isPalindrome
    create for loop that iterates from 0 to half of the length of the string
    if the character at index i is not equal to the chracter at index length-1-i, return false
    else, continue the loop
  return true

*/

/*
  Add written explanation of your solution here
  The way I thought about it was to think of these strings as an array of characters.
  If there are n number of characters, we want to see if the 1st character is equal to
  the nth character. Because of javascript syntax that actually means that the 0th
  character has to equal the n-1th character, the 1st character has to equal the
  n-2th character, on and on until we get to the middle of the string (the length divided by 2)
  For each iteration, if the comparison is true, we move on to the next pair of characters.
  If the comparison is false, the function returns false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("")

  console.log("Expecting: true");
  console.log ("=>", isPalindrome("kayak"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("soccer"));
}

module.exports = isPalindrome;
