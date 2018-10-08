Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9

arr = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9]
]

The left-to-right diagonal = 1 + 5 + 9 = 15. The right to left diagonal = 3 + 5 + 9 = 17.
Their absolute difference is |15 - 17| = 2.

Solution:

function diagonalDifference(arr) {
    let firstDiagonal = 0;
    let secondDiagonal = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i === j) {
                firstDiagonal += arr[i][j];
            }
        }
    }
    let reversedArr = arr.reverse();
    for (let i = 0; i < reversedArr.length; i++) {
        for (let j = 0; j < reversedArr.length; j++) {
            if (i === j) {
                secondDiagonal += reversedArr[i][j];
            }
        }
    }
    return Math.abs(firstDiagonal - secondDiagonal);
}
