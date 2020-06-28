const ftoc = function(temp) {
  let cel = (temp - 32) * (5 / 9);
  return Math.round(cel * 10) / 10;
}

const ctof = function(temp) {
  let fah = temp * (9 / 5) + 32;
  return Math.round(fah * 10) / 10;
}

module.exports = {
  ftoc,
  ctof
}
