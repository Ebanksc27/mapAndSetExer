// What does the following code return?

new Set([1,1,2,2,3,4]) // returns a set of [1,2,3,4]

// What does the following code return?

[...new Set("referee")].join("") // returns "ref"

// What does the Map m look like after running the following code?
let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

/*
  0: {Array(3) => true}
  1: {Array(3) => false}
*/

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function vowelCount(str) {
    const vowels = 'aeiouAEIOU';
    const vowelMap = new Map();
  
    for (const char of str) {
      if (vowels.includes(char)) {
        const lowerChar = char.toLowerCase();
        vowelMap.set(lowerChar, (vowelMap.get(lowerChar) || 0) + 1);
      }
    }
    return vowelMap;
  }

console.log(vowelCount('awesome')); // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
console.log(vowelCount('Colt')); // Map { 'o' => 1 }