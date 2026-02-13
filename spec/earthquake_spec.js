import { earthquakeDamage } from "../src/earthquake.js";

describe("Earthquake Damage Tests", function () {

  it("tests little or no damage", function () {
    expect(earthquakeDamage(4.2)).toBe("Little or no damage");
  });

  it("tests some damage", function () {
    expect(earthquakeDamage(5.2)).toBe("Some damage");
  });

  it("tests serious damage", function () {
    expect(earthquakeDamage(6.0)).toBe("Serious damage: walls may crack or fall");
  });

  it("tests disaster", function () {
    expect(earthquakeDamage(7.0)).toBe("Disaster: buildings may collapse");
  });

  it("tests catastrophe", function () {
    expect(earthquakeDamage(8.1)).toBe("Catastrophe: most buildings destroyed");
  });

});
