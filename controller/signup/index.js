
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
    check(){
        this.state.status=true;
    }
    /**
     * validate external inputs
     */
    validation(){ 

        const {name,sex,birth,email,password}=this.data;
 
        this.valide.alphabets(name,{message:"Please enter a valid name (with only alphabets)"});
        this.valide.email(email,{message:'Please enter a valid  email'});
        this.valide.date(birth,{message:'Please enter a valid date Please fill in a complete birthday'});
        this.valide.match(sex,["Famale","Male"],{message:"Please select your gender"});
        this.valide.alphaNumeric(password,{message:"Enter a password Please enter a valid password (with alphabets,numeric and more then 8 charcters"});
        this.valide.error.length > 0 
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