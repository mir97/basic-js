const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let step = 0;
    if (Array.isArray(arr)) {
      if (step == 0) step++;
      let temp = 0;
      arr.forEach(el => {
        if (Array.isArray(el)) {
          let min = this.calculateDepth(el);
          if (min > temp) temp = min;
        }
      });
      step += temp;
    }
    return step;
  }
};

