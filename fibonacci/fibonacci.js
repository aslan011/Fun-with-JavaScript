const fibonacci = num => {
  let fibNum = 1;
  let prevNum = 0;
  if (num === 1 || num === 2) {
    return fibNum;
  }
  if (num < 0) {
    return 'OOPS';
  }
  for (let i = 1; i < num; i++) {
    const addNum = prevNum;
    prevNum = fibNum;
    fibNum += addNum;
  }
  return fibNum;
};

fibonacci(4);

module.exports = fibonacci;
