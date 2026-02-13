export function totalCoins(nickels, dimes, quarters, loonies, toonies) {

  let total = 0;

  total =
    nickels * 0.05 +
    dimes * 0.10 +
    quarters * 0.25 +
    loonies * 1.00 +
    toonies * 2.00;

  return total;
}