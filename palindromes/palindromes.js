const palindromes = str => {
  const strArray = [];
  const reverseStr = [];

  str
    .toLowerCase()
    .split('')
    .forEach(letter => {
      if (letter.toLowerCase() !== letter.toUpperCase()) {
        strArray.push(letter);
        reverseStr.unshift(letter);
      }
    });

  return strArray.join('') === reverseStr.join('');
};

module.exports = palindromes;
