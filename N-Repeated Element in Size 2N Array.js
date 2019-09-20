// In a array A of size 2N, there are N+1 unique elements, and exactly one of these elements is repeated N times.

// Return the element repeated N times.

Solution:

/**
 * @param {number[]} A
 * @return {number}
 */
var repeatedNTimes = function(A) {
    let counts = {};
    for (const num of A) {
        if (counts[num] > 0) {
            return num;
        } else {
            counts[num] = 1;
        }
        
    }
};
