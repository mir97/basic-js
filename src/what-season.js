const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(!date)
  return 'Unable to determine the time of year!';
  checkDate = new Date();
  if(Object.prototype.toString.call(date) != Object.prototype.toString.call(checkDate))
  throw new Error("Tricky error");

    let arr = [
      {word: "winter", array: [11, 0, 1]},
      {word: "spring", array: [2, 3, 4]},
      {word: "summer", array: [5, 6, 7]},
      {word: "autumn", array: [8, 9, 10]}
    ];

    for (i = 0; i < arr.length; i++) {

      for (j = 0; j < arr[i].array.length; j++)
        if (arr[i].array[j] == date.getMonth()) {
          return arr[i].word;
        }
    }
  };
