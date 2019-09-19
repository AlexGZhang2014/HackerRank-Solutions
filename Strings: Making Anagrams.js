// Alice is taking a cryptography class and finding anagrams to be very useful.
// We consider two strings to be anagrams of each other if the first string's letters can be rearranged to form the second string.
// In other words, both strings must contain the same exact letters in the same exact frequency.
// For example, bacdc and dcbac are anagrams, but bacdc and dcbad are not.
// Alice decides on an encryption scheme involving two large strings where encryption is dependent on the minimum number of
// character deletions required to make the two strings anagrams. Can you help her find this number?

// Given two strings, a and b, that may or may not be of the same length, determine the minimum number of character deletions
// required to make a and b anagrams. Any characters can be deleted from either of the strings.

// For example, if a = cde and b = dcf, we can delete e from string a and f from string b so that both remaining strings are cd and dc which are anagrams.

Solution:

function makeAnagram(a, b) {
    // Initialize a variable to sum up deletions
    let deletions = 0;
    // Initialize an empty object that acts as a hash table
    let hashMap = {};
    // Create array that contains all lowercase letters
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    // Loop thru the alphabet array and add key/value pair such that key = letter and value = array with count of letter from each string
    for (const letter of alphabet) {
        hashMap[letter] = [a.split("").filter(x => x === letter).length, b.split("").filter(x => x === letter).length];
    }
    // Iterate thru hash table and add the difference between counts for each value
    for (const letter in hashMap) {
        deletions += Math.abs(hashMap[letter][1] - hashMap[letter][0]);
    }
    // Return total deletions
    return deletions;
}
