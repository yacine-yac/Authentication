/**
 * state of signup process 
 * @property {null | boolean} status  status of signup
 */
class SignupState{
    constructor(){
        this.status=null;
        this.errorMessage={}
    }
    setName(message){
               Object.assign(this.errorMessage,{name:message});
    }
    setBirth(message){
        Object.assign(this.errorMessage,{birth:message});
    }
    setSex(message){
        Object.assign(this.errorMessage,{sex:message});
    }
    setEmail(message){
        Object.assign(this.errorMessage,{email:message});
    }
    setPassword(message){
        Object.assign(this.errorMessage,{password:message});
    }
}
module.exports={SignupState}