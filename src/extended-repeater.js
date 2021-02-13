const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {

  let temp="";

  if(typeof(str && options.addition)!='string'){
    str = String(str);
    options.addition = String(options.addition );
  }
  if(options.separator == undefined){
    options.separator="+";
  }
  if(options.additionSeparator==undefined){
    options.additionSeparator="|";
  }
  if(options.repeatTimes==undefined){
    options.repeatTimes=1;
    options.additionRepeatTimes=1;
  }

  for(i=0;i<options.repeatTimes;i++){ 
    let str_c = str;
    for(j=0;j<options.additionRepeatTimes;j++){
      if(j==options.additionRepeatTimes-1){
        str_c=str_c+options.addition;
      }
      else{
        str_c=str_c+options.addition+options.additionSeparator;
      }
    }
    
    if(i==options.repeatTimes-1){
    temp=temp+str_c;
    }
    else{
      temp=temp+str_c+options.separator;
    }
  }

  return temp;
}
