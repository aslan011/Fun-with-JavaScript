const removeFromArray = (...args) => {
  const argArray = args[0];
  const uniqueArray = [];
  argArray.forEach(item => {
    if (!args.includes(item)) {
      uniqueArray.push(item);
    }
  });
  return uniqueArray;
};

module.exports = removeFromArray;
