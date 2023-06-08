
/**
 * validate external inputs
 */
class Validation{
    constructor(){ 
            this.filters=require('validator');
            this.error=[];
    }
    /**
     * Check if input is date form 
     * @param {*} field 
     * @returns {Boolean}
     */
    date(field,{message}){
        if(!this.filters.isDate(field,{delimiters:['.','/', '-']})){this.error.push(message)};
    }
    email(field,{message}){console.log('fffff',field);
        if(!this.filters.isEmail(field)) this.error.push(message);
    }
    alphabets(field,{message}){
      if(!this.filters.isAlpha(field))this.error.push(message);
    }
    alphaNumeric(field,{message}){
        if(!this.filters.isAlphanumeric(field)) this.error.push(message); 
    }
    /**
     * check if input has a special characters
     * @param {*} field 
     * @param {Array} characters characters that should be checked
     */
    match(field,characters,{message}){
        const expressions=characters.join('|');
        const regx= new RegExp(`^(${expressions})$`,'g')
        if(!regx.test(field)) this.error.push(message);
    }
}
module.exports={Validation};