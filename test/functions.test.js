import { divide, toPascalCase, mostFrequent } from "../src/functions";
import { expect, it } from "@jest/globals";

describe("bootcamp()", () => {
  describe("divide()", () => {
    test("should divide", () => {
      expect(divide(10, 4)).toBe(2.5);
    });

    it("should throw error when dividend is not a number", () => {
      expect(() => divide("NaN", 3)).toThrow("Invalid argument!");
    });

    it("should throw error when divisor is not a number", () => {
      expect(() => divide(10, "NaN")).toThrow("Invalid argument!");
    });

    it("should throw error when divisor is zero", () => {
      expect(() => divide(10, 0)).toThrow("Divide by zero!");
    });
  });
  describe("toPascalCase()", () => {
    it("should make pascal case given sentence", () => {
      // arrange
      const sentence = "bootcamp";
  
      // act
      const result = toPascalCase(sentence);
  
      // assert
      expect(result).toBe("Bootcamp");
    });

    it("should return empty when given string is an empty string", () => {
      // arrange
      const sentence = "";
  
      // act
      const result = toPascalCase(sentence);
  
      // assert
      expect(result).toBe("");
    });

    it("should not make pascal case when word is one of 'and' 'or'", () => {
      // arrange
      const sentence = "to be or not to be";
  
      // act
      const result = toPascalCase(sentence);
  
      // assert
      expect(result).toBe("To Be or Not To Be");
    });
  })

  describe("mostFrequent()", () => {
    it('should return most frequent item in array', () => {
      // arrange
      const list = ['apple' , 'orange', 'banana', 'apple'];
      const length = list.length;

      // act
      const result = mostFrequent(list, length)

      // assert
      expect(result).toBe('apple');
    })
  })
});