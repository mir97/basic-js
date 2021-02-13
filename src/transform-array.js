const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr)
{
  
  let mas= arr;
  for(i=0;i<arr.length;i++){

      if(arr[i]=='--discard-prev'){
        if(mas[i-1]!=undefined){
          delete mas[i];
          delete mas[i-1];
        }
        else{
          delete mas[i];
        }
      
      }

      if(arr[i]=='--discard-next'){
        if(mas[i+1]!=undefined){
          delete mas[i];
          delete mas[i+1];
        }
        else{
          delete mas[i];
        }
  
      }

      if(arr[i]=='--double-next'){
        if(mas[i+1]!=undefined){
          mas[i]=mas[i+1];
        }
        else{
          mas.splice(i,1);
        }
       
      }

      if(arr[i]=='--double-prev'){
        if(mas[i-1]!=undefined){
          mas[i]=mas[i-1]
        }
        else{
          mas.splice(i,1);
        }
      
      }

    }
    
    return  mas.filter(Boolean);
  }



