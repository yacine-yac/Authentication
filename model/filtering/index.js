
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
    date(field,{message}){
        if(!this.filters.isDate(field,{delimiters:['.','/', '-']})){this.error=Object.assign(this.error,message);};
    }
    email(field,{message}){
        if(!this.filters.isEmail(field))this.error=Object.assign(this.error,message);
    }
    alphabets(field,{message}){
      if(!(/^[A-Za-z\s]+$/.test(field)))this.error=Object.assign(this.error,message);
    }
    alphaNumeric(field,{message}){
        if(!this.filters.isAlphanumeric(field))this.error=Object.assign(this.error,message);
    }
    /**
     * check if input has a special characters
     * @param {*} field 
     * @param {Array} characters characters that should be checked
     */
    match(field,characters,{message}){
        const expressions=characters.join('|');
        const regx= new RegExp(`^(${expressions})$`,'g')
        if(!regx.test(field)) this.error=Object.assign(this.error,message);
    }
}
module.exports={Validation};