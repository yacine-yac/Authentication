
/**
 *  Signup controller inputs
 */
class SignupController{
    /**
     * 
     * @param {Request} req extract inputs
     * @param {Validation} valide validate inputs
     */
    constructor(req,valide){ 
        this.valide=valide;
        this.data=req.body;
        this.state=req.signup;
    }
    /**
     * 
     */
    check(){
        const {name,birth,email,password}=this.data;
        const errors=this.state.errorMessage;
        if(!name) this.state.setName('Please fill in a name');
        if(!birth) this.state.setBirth('Please fill in a complete birthday');
        if(!email) this.state.setEmail('Please fill in an address email');
        if(!password) this.state.setPassword('Enter a password');

        if(Object.values(errors).length>0){
            this.state.status=false;
            this.state.errorMessage=errors;
        }
    }
    /**
     * validate external inputs
     */
    validation(){ 
        const {name,sex,birth,email,password}=this.data;
          if(this.state.status===false) return ;
          
        this.valide.alphabets(name,{message:{name:"Please enter a valid name (with only alphabets)"}});
        this.valide.email(email,{message:{email:'Please enter a valid  email'}});
        this.valide.date(birth,{message:{birth:'Please enter a valid date '}});
        this.valide.match(sex,["Famale","Male"],{message:{sex:"Please select your gender"}});
        this.valide.alphaNumeric(password,{message:{password:"Please enter a valid password (with alphabets,numeric and more then 8 charcters"}});
        Object.values(this.valide.error).length > 0 
                    ? (
                        this.state.status=false,
                        this.state.errorMessage=this.valide.error
                    ) 
                    :   this.state.status=true;
    }
    getInputs(){
        const {name,sex,birth,email,password}=this.data;
       return this.state.status ? {name,sex,birth,email,password} : null;
    }
}
module.exports={SignupController}