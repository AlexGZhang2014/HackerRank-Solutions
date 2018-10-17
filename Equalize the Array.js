Karl has an array of integers. He wants to reduce the array until all remaining elements are equal.
Determine the minimum number of elements to delete to reach his goal.

For example, if his array is arr = [1, 2, 2, 3], we see that he can delete the 2 elements 1 and 3 leaving arr = [2, 2].
He could also delete both twos and either the 1 or the 3, but that would take 3 deletions. The minimum number of deletions is 2.

Solution:

function equalizeArray(arr) {
  let uniqueNumbers = [];
  for (const num of arr) {
    if (!uniqueNumbers.includes(num)) {
      uniqueNumbers.push(num);
    }
  }
  let highestCount = 0;
  for (const num of uniqueNumbers) {
    let filteredArray = arr.filter(x => x === num);
    if (filteredArray.length > highestCount) {
      highestCount = filteredArray.length;
    }
  }
  return arr.length - highestCount;
}
