Given a string, S, of length N that is indexed from 0 to N - 1, print its even-indexed and odd-indexed characters as 2 space-separated strings on a single line (see the Sample below for more detail).

Note: 0 is considered to be an even index.

Solution:

function processData(input) {
  let array = input.split('\n');
  array.shift();
  let finalArray = [];
  for (let i = 0; i < array.length; i++) {
    let evenString = "";
    let oddString = "";
    for (let j = 0; j < array[i].length; j++) {
      if (j % 2 === 0) {
        evenString += array[i][j];
      } else {
        oddString += array[i][j];
      }
    }
    const finalString = `${evenString} ${oddString}`;
    finalArray.push(finalString);
  }
  for (const string of finalArray) {
    console.log(string);
  }
} 
