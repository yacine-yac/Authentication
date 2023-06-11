/**
 * state of signup process 
 * @property {null | boolean} status  status of signup
 */
class SignupState{
    constructor(){
        this.status=null;
        this.errorMessage={
            name:null,
            birth:null,
            sex:null,
            password:null,
            email:null
        }
    }
}
module.exports={SignupState}