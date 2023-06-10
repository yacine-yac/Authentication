
/**
 * validate external inputs
 */
class Validation{
    constructor(){ 
            this.filters=require('validator');
            this.error={};
    }
    /**
     * Check if input is date form 
     * @param {*} field 
     * @returns {Boolean}
     */
    date(name,field,{message}){
        if(!this.filters.isDate(field,{delimiters:['.','/', '-']})){this.error[name]=message};
    }
    email(name,field,{message}){console.log('fffff',field);
        if(!this.filters.isEmail(field)) this.error[name]=message;
    }
    alphabets(name,field,{message}){
      if(!this.filters.isAlpha(field))this.error[name]=message;
    }
    alphaNumeric(name,field,{message}){
        if(!this.filters.isAlphanumeric(field)) this.error[name]=message; 
    }
    /**
     * check if input has a special characters
     * @param {*} field 
     * @param {Array} characters characters that should be checked
     */
    match(name,field,characters,{message}){
        const expressions=characters.join('|');
        const regx= new RegExp(`^(${expressions})$`,'g')
        if(!regx.test(field)) this.error[name]=message;
    }
}
module.exports={Validation};