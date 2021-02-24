const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr)
{
    if (!Array.isArray(arr)) {
      throw new Error('not an Array!');
    }

    let mas = [];

    for(i=0;i<arr.length;i++){
      if (arr[i] === '--discard-next'){
        if (arr[i+2] === '--discard-prev' || arr[i+2] === '--double-prev') {
          i+=1;
        }
        i+=1;
      }
      else if(arr[i]=='--double-next'){
        if (arr[i+1] !== undefined) {
          mas.push(arr[i+1]);
        }
      }
      else if (arr[i] === '--double-prev') {
        if (mas.length > 0){
          mas.push(mas[mas.length - 1]);
        }
      }
      else if(arr[i]=="--discard-prev"){
        mas.pop();
      }
      else if(arr[i]!=undefined){
        mas.push(arr[i]);
      }
    }

    return mas;
}



