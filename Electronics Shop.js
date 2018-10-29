Monica wants to buy a keyboard and a USB drive from her favorite electronics store. The store has several models of each.
Monica wants to spend as much as possible for the 2 items, given her budget.

Given the price lists for the store's keyboards and USB drives, and Monica's budget, find and print the amount of money Monica will spend.
If she does not have enough money to both a keyboard and a USB drive, print -1 instead. She will buy only the two required items.

For example, suppose she has b = 60 to spend. Three types of keyboards cost keyboards = [40, 50, 60]. Three USB drives cost drives = [5, 8, 12].
She could purchase a 40 keyboard + 12 drive = 52, or a 50 keyboard + 8 drive = 58. She chooses the latter.
She can't buy more than 2 items so she can't spend exactly 60.

Solution:

function getMoneySpent(keyboards, drives, b) {
  let sortedKeyboards = keyboards.sort((a, b) => b - a);
  let sortedDrives = drives.sort((a, b) => b - a);
  let bestDeal = -1;
  for (const keyboard of sortedKeyboards) {
    for (const drive of sortedDrives) {
      if (keyboard + drive > bestDeal && keyboard + drive <= b) {
        bestDeal = keyboard + drive;
      }
    }
  }
  return bestDeal;
}
