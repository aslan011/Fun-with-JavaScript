const caesar = (string, shift) => {
  const newShift = shift % 26;
  const newArray = [];
  const splitStr = string.split('');
  splitStr.forEach(letter => {
    const newLetter = letter.toUpperCase();
    const charCode = newLetter.charCodeAt(0);
    if (charCode >= 65 && charCode < 91) {
      let newCharCode = newShift + charCode;
      if (newCharCode > 90) {
        newCharCode -= 26;
      } else if (newCharCode < 65) {
        newCharCode += 26;
      }
      if (letter === letter.toLowerCase()) {
        newArray.push(String.fromCharCode(newCharCode + 32));
      } else {
        newArray.push(String.fromCharCode(newCharCode));
      }
    } else {
      newArray.push(letter);
    }
  });
  return newArray.join('');
};

module.exports = caesar;
