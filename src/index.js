module.exports = function toReadable(number) {
    const simpleNumbers = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const numerals = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const decades = [
        "ten",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];
    const hundreds = [
        "one hundred",
        "two hundred",
        "three hundred",
        "four hundred",
        "five hundred",
        "six hundred",
        "seven hundred",
        "eight hundred",
        "nine hundred",
        "nine hundred",
    ];
    if (number <= 19) {
      return simpleNumbers[number];
    } else if (number > 19 && number < 100) {
      const arr = number.toString().split("");
      if (arr[1] === '0') 
        return decades[arr[0] - 1];
      else 
        return `${decades[arr[0] - 1]} ${numerals[arr[1]]}`;
    } else if (number >= 100 && number <= 1000) {
      const arr = number.toString().split('');
      const simpleNumber = Number(`${arr[1]}${arr[2]}`);
      if (arr[1] === '0' && arr[2] === '0')
        return hundreds[arr[0] - 1];
      else if (simpleNumber < 20)
        return `${hundreds[arr[0] - 1]} ${simpleNumbers[simpleNumber]}`;
      else if (arr[1] === '0') 
        return `${hundreds[arr[0] - 1]} ${numerals[arr[2]]}`;
      else if (arr[2] === '0')
        return `${hundreds[arr[0] - 1]} ${decades[arr[1] - 1]}`;
      else 
        return `${hundreds[arr[0] - 1]} ${decades[arr[1] - 1]} ${numerals[arr[2]]}`;
    }
    else 
      return 'Sorry, please enter correct number to 1000';
};
