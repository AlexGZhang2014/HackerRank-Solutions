Given n names and phone numbers, assemble a phone book that maps friends names to their respective phone numbers.
You will then be given an unknown number of names to query your phone book for.
For each name queried, print the associated entry from your phone book on a new line in the form name=phoneNumber;
if an entry for "name" is not found, print Not found instead.

Note: Your phone book should be a Dictionary/Map/HashMap data structure.

Input:
The first line contains an integer, n, denoting the number of entries in the phone book. 
Each of the n subsequent lines describes an entry in the form of 2 space-separated values on a single line.
The first value is a friends name, and the second value is an 8-digit phone number.

After the n lines of phone book entries, there are an unknown number of lines of queries.
Each line (query) contains a name to look up, and you must continue reading lines until there is no more input.

Note: Names consist of lowercase English alphabetic letters and are first names only.

Solution:

function processData(input) {
  let array = input.split('\n');
  let num = array.shift();
  let pairs = array.slice(0, num);
  let queries = array.slice(num);
  let phoneBook = {};

  for (const pair of pairs) {
    let pairArr = pair.split(' ');
    let name = pairArr[0];
    let phoneNum = pairArr[1];
    phoneBook[name] = phoneNum;
  }

  for (const query of queries) {
    if (!phoneBook[query]) {
      console.log("Not found");
    } else {
      console.log(`${query}=${phoneBook[query]}`);
    }
  }
} 
