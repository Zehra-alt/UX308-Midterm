import { calculateGymCost } from "../src/gymCost.js";

describe("Gym Cost Calculator Tests", function () {

  it("tests 1 friend (5% discount)", function () {
    let result = calculateGymCost(100, 1);
    expect(result).toBe(95);
  });

  it("tests 2 friends (10% discount)", function () {
    let result = calculateGymCost(100, 2);
    expect(result).toBe(90);
  });

  it("tests 3 friends (15% discount)", function () {
    let result = calculateGymCost(100, 3);
    expect(result).toBe(85);
  });

  it("tests 4 friends (15% discount)", function () {
    let result = calculateGymCost(100, 4);
    expect(result).toBe(85);
  });

});