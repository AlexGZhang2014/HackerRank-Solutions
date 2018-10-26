When you select a contiguous block of text in a PDF viewer, the selection is highlighted with a blue rectangle.
In this PDF viewer, each word is highlighted independently.
In this challenge, you will be given a list of letter heights in the alphabet and a string.
Using the letter heights given, determine the area of the rectangle highlight in mm^2 assuming all letters are 1 mm wide.

For example, the highlighted word = "torn". Assume the heights of the letters are t = 2, o = 1, r = 1, and n = 1.
The tallest letter is 2 mm high and there are 4 letters. The hightlighted area will be 2 * 4 = 8 mm^2 so the answer is 8.

designerPdfViewer has the following parameter(s):

h: an array of integers representing the heights of each letter
word: a string

Solution:

function designerPdfViewer(h, word) {
  const letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  const letterHeights = h;
  let tallestHeight = 0;
  for (const letter of word) {
    let currentHeight = letterHeights[letters.indexOf(letter)];
    if (currentHeight > tallestHeight) {
      tallestHeight = currentHeight;
    }
  }
  return tallestHeight * word.length;
}
