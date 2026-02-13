import { totalCoins } from "../src/coins.js";

describe("Coin Calculator Tests", function () {

  it("tests all zeros", function () {
    expect(totalCoins(0, 0, 0, 0, 0)).toBe(0);
  });

  it("tests small values", function () {
    expect(totalCoins(2, 1, 1, 0, 0)).toBe(0.45);
  });

  it("tests larger values", function () {
    expect(totalCoins(5, 5, 4, 2, 1)).toBe(5.75);
  });

});