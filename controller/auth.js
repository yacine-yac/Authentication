
/**
 * Handle credentials validation (signleton design pattern)
 */
class AuthenticationController{
    static main=null;
    /**
     * 
     * @param {Request} req 
     * @param {AuthError} error 
     * @returns 
     */
    constructor(req,error){
        if(AuthenticationController.main !=null) { return; }
        this.req=req;
        this.method=req.method;
        this.email=null;
        this.password=null;
        this.redirect=req.query.redirect ?? null;
        this.error=error;
    }
    /**
     * set credentials (email & password) based request method
     */
    setCredentials(){
        const data=this.method =='POST' ? this.req.body : this.req.query;
        this.email=data?.email;
        this.password=data?.password;
    }
    /**
     * Check if credentials are not empty
     * @returns {Boolean}
     */
    check(){
            if(!this.email){ this.error.email="Please, provide an email"}
            if(!this.password){this.error.password="Please, provide a password";}
           return  (this.error.email || this.error.password) ? false : true;
    }
    /**
     * valide external inputs (credentials & url variables)
     * @param {Validation} validation 
     * @returns {Boolean} 
     */
    validation(validation){

      if(!this.error.email){
            validation.email(this.email,{message:{email:"Please, provide a valide email"}});
            this.error.email= validation.error.email;
        }

      if(!this.error.password){
            validation.alphaNumeric(this.password,{message:{password:"Please, provide a valide password"}});
            this.error.password= validation.error.password;
        }
      this.redirect && validation.alphabets(this.redirect,{redirect:"Bad request, check your Url"});

        return (this.error.email || this.error.password) ? false : true;
    }
    /**
     * initialize AuthenticationController object
     * @param {Request} req 
     * @param {AuthError} error 
     * @returns {AuthenticationController}
     */
    static init(req,error){
        if(AuthenticationController.main ==null){
            AuthenticationController.main=new AuthenticationController(req,error); 
        }
        return AuthenticationController.main;
    }
    /**
     * destroy AuthenticationController object
     */
    static destroy(){
        AuthenticationController.main=null;
    }
}
module.exports={AuthenticationController};