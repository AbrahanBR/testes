//js novo import {som,sub,div,mult} from "../../src/math/basic.js"
const {som,sub,div,mult} = require("../../src/math/basic.js"); 

describe("Basic Mathh Functions", () => {
  it("should run math functions", () => {
    const number1 = 5;
    const number2 = 22;
    const number3 = 10;
    const number4 = 6;
    const result = 43;

    expect(som(number1,number2,number3,number4)).toBe(result);
  });

  it("shoudl subtract numbers", () => {
    const number1 = 22;
    const number2 = 5;
    const number3 = 7;
    const number4 = 10;
    const result = 17;
    const negativeResult = -17;


    const negativeNumber = -5;
    
    expect(sub(number1, number2)).toBe(result);
    expect(sub(number2, number1)).toBe(negativeResult);
    expect(sub(number1, number2, number3)).toBe(result - number3 );
    expect(sub(number1, number2, number3, number4)).toBe(result  - number3 - number4);
    expect(sub(number1,negativeNumber)).toBe((number1 - negativeNumber));
  });

  it("shoudl divid numbers", () => {
    const number1 = 22;
    const number2 = 2;
    const result = 11;

    expect(div(number1, number2)).toBe(result);
  });

  it("shoudl multiply numbers", () => {
    const number1 = 22;
    const number2 = 5;
    const result = 110;

    expect(mult(number1, number2)).toBe(result);
  });
})