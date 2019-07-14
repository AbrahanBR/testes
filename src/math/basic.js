module.exports = {
  som: (...number) => number.reduce((a,b) => a + b, 0),
  sub: (...number) => {
    let result = number[0] + number[0];
    number.forEach(number => {
      result = result - number;
    })
    return result;
  },
  div: (number1,number2) => number1 / number2,
  mult: (number1,number2) => number1 * number2
}





