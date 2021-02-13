const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag = true) {
    this.flag = flag;
  }
  
  encrypt(str, key) {

    if(typeof str != 'string' || typeof key != 'string'){
      throw Error('ITS AN ERROR')
    }

    const azbuka = "abcdefghijklmnopqrstuvwxyz";
    let new_str="";
    let i=0;
    let k=0;
    var re = new RegExp("^[a-zA-Z]*$");
    str=str.toLowerCase();
    key=key.toLowerCase();
  
    while(i!=str.length){
  
      if(re.test(str[i])){
        if(k>key.length-1){
          k=0;
        }
        if(azbuka.indexOf(key[k])+azbuka.indexOf(str[i])>=azbuka.length){
          new_str=new_str+azbuka[Math.abs(azbuka.length - (azbuka.indexOf(key[k])+azbuka.indexOf(str[i])))];
        }
        else{ 
          new_str=new_str+azbuka[azbuka.indexOf(key[k])+azbuka.indexOf(str[i])];
        }  
        k++;
        i++;
      }
      else{
        new_str=new_str+str[i];
        i++;
      }   
    }
  
    if (this.flag) {
      return new_str.toUpperCase();
    } else {
      return new_str.toUpperCase().split('').reverse().join('');
    }

  }    

  decrypt(str, key) {

  if(typeof str != 'string' || typeof key != 'string'){
        throw Error('ITS AN ERROR')
      }

    const azbuka = "abcdefghijklmnopqrstuvwxyz";
    let new_str="";
    let i=0;
    var re = new RegExp("^[a-zA-Z]*$");
    str=str.toLowerCase();
    key=key.toLowerCase();
    let k=0;

    while(i!=str.length){

      if(re.test(str[i])){
        if(k>key.length-1){
          k=0;
        }
        if(azbuka.indexOf(str[i]) - azbuka.indexOf(key[k]) < 0 ){
            new_str=new_str+azbuka[(azbuka.length+azbuka.indexOf(str[i]))  - azbuka.indexOf(key[k])];
        }
        else{
          new_str=new_str+azbuka[azbuka.indexOf(str[i])- azbuka.indexOf(key[k])];
        }  
        k++;
        i++;
      }
      else{
        new_str=new_str+str[i];
        i++;
      }   
    }

    if (this.flag) {
      return new_str.toUpperCase();
    } else {
      return new_str.toUpperCase().split('').reverse().join('');
    }

  }
}

module.exports = VigenereCipheringMachine;



