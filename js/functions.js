function checkStringLength(string, validLength) {
  return string.length <= validLength;
}

function isPalindrome(string) {
  let cleanedString = string.replaceAll(' ', '').toUpperCase();
  let reversedString = '';
  for (let i = cleanedString.length - 1; i >= 0; i--) {
    reversedString += cleanedString[i];
  }

  return cleanedString === reversedString;
}

function extractNumbers(string) {
  string = string.toString();
  let numbers = '';

  for (let i = 0; i < string.length; i++) {
    let char = parseInt(string[i]);

    if (!Number.isNaN(char)) {
      numbers += char;
    }
  }

  return numbers ? Number(numbers) : NaN;
}
