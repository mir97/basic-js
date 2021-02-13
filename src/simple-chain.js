const CustomError = require("../extensions/custom-error");

const chainMaker = {
  str:[],

  getLength() {
    return this.str.length;
  },
  addLink(value) {
    this.str.push(`( ${value} )`);
    return this;
  },

  removeLink(position) {
    if (this.str[position-1] === undefined) {
      this.str = [];
      throw "Error";
    }
    this.str.splice(position-1, 1);
    return this;
  },
  reverseChain() {
    this.str.reverse();
    return this;
  },
  finishChain() {
    let result = this.str.join("~~");
    this.str=[];
    return result;
  }
};

module.exports = chainMaker;
