const sumAll = function(initialNumber, finalNumber) {
  let min = 0;
  let max = 0;
  let sum = 0;

  if (!Number.isInteger(initialNumber) || !Number.isInteger(finalNumber)) return "ERROR";

  if (initialNumber < 0 || finalNumber < 0) return 'ERROR'

  if (initialNumber > finalNumber){
    max = initialNumber;
    min = finalNumber;
  } else {
    max = finalNumber;
    min = initialNumber;
  }

  for (var i = min; i <= max; i++) {
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
