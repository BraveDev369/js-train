/**
 * get a word and check that is palindrome or not
 */

const word = prompt("Enter a word: ");

const reverseWord = word.split("").reverse().join("");

if (word === reverseWord) {
  console.log("This word is palindrome");
} else {
  console.log("This word is not a palindrome");
}
