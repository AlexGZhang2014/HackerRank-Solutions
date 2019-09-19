//A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
//For example, if 2 left rotations are performed on array [1, 2, 3, 4, 5], then the array would become [3, 4, 5, 1, 2].

//Given an array a of n integers and a number, d, perform d left rotations on the array.
//Return the updated array to be printed as a single line of space-separated integers.

Solution:

function rotLeft(a, d) {
    //create a temporary array to store numbers
    let tempArray = [];
    //loop thru the array and push the numbers into tempArray d times
    for (let i=0; i<d; i++) {
        tempArray.push(a[i]);
    }
    //create a slice of the original array that will serve as the new front piece of the final array
    let cutArray = a.slice(d);
    //concatenate the new front subarray and the temp subarray
    return cutArray.concat(tempArray);
}
