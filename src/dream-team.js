const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  try {
    let str = "";
    for (i = 0; i < members.length; i++)
      if (typeof (members[i]) == "string") {
        members[i]=members[i].replace(/\s/g,'')
        str = str + members[i][0].toUpperCase();
      }
    ;
    return str.split("").sort().join("");
  }
  catch(er) {
    return false;
  }
};
