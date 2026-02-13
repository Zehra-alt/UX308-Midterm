import { fahrenheitToCelsius } from "../src/tempConvert.js";

describe("Fahrenheit to Celsius Tests", function () {

  it("tests freezing point", function () {
    expect(fahrenheitToCelsius(32)).toBe(0);
  });

  it("tests boiling point", function () {
    expect(fahrenheitToCelsius(212)).toBe(100);
  });

  it("tests room temperature", function () {
    expect(Math.round(fahrenheitToCelsius(70))).toBe(21);
  });

});