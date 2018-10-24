Brie’s Drawing teacher asks her class to open their books to a page number.
Brie can either start turning pages from the front of the book or from the back of the book.
She always turns pages one at a time. When she opens the book, page is always on the right side.

When she flips page 1, she sees pages 2 and 3. Each page except the last page will always be printed on both sides.
The last page may only be printed on the front, given the length of the book.
If the book is n pages long, and she wants to turn to page p, what is the minimum number of pages she will turn?
She can start at the beginning or the end of the book.

Given n and p, find and print the minimum number of pages Brie must turn in order to arrive at page p.

Solution:

function pageCount(n, p) {
  let backTurns = 0;
  let backLeftPage;
  let backRightPage;
  if (n % 2 === 0) {
    backLeftPage = n;
    backRightPage = n + 1;
  } else {
    backLeftPage = n - 1;
    backRightPage = n;
  }
  let currentBackPages = [backLeftPage, backRightPage];
  while (!currentBackPages.includes(p)) {
    backTurns += 1;
    currentBackPages[0] -= 2;
    currentBackPages[1] -= 2;
  }
  let frontTurns = 0;
  let frontLeftPage = 0;
  let frontRightPage = 1;
  let currentFrontPages = [frontLeftPage, frontRightPage];
  while (!currentFrontPages.includes(p)) {
    frontTurns += 1;
    currentFrontPages[0] += 2;
    currentFrontPages[1] += 2;
  }
  return Math.min(backTurns, frontTurns);
}
