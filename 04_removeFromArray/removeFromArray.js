const removeFromArray = function(array, ...filters) {
  return array.filter(val => !filters.includes(val));
};

// Do not edit below this line
module.exports = removeFromArray;
