/**
 * state of signup process 
 * @property {null | boolean} status  status of signup
 */
class SignupState{
    constructor(){
        this.status=null;
        this.errorMessage=[]
    }
}
module.exports={SignupState}