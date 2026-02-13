import { cubeVolume } from "../src/cubeVolume.js";

describe("Cube Volume Tests", function () {

  it("tests small cube", function () {
    expect(cubeVolume(1)).toBe(1);
  });

  it("tests medium cube", function () {
    expect(cubeVolume(2)).toBe(8);
  });

  it("tests larger cube", function () {
    expect(cubeVolume(3)).toBe(27);
  });

});