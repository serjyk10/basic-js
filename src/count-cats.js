module.exports = function countCats(matrix) {
  return matrix.reduce((comArr, arr) => comArr.concat(arr), []).filter((el) => el == '^^').length;
};