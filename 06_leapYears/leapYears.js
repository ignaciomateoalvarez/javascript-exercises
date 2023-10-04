const leapYears = function(year) {
  let validation = null;
  if (year % 4 === 0) {
    validation = true;
    if (year % 100 === 0) {
      validation = false;
      if (year % 400 === 0) {
        validation = true;
      }
    }
  } else {
    validation = false;
  }

  return validation
};

// Do not edit below this line
module.exports = leapYears;
