function signupHandler(req,res,next){
 /** *** Sign up Steps
         * init Signup 
         * set Signup into Request object
         * check inputs
         * check client
         * generate id for DB
         * insert into database
         * open session
         * redirect
  *  */
    const {Signup}= require('../model/signup');
    const {Validation}=require('../model/filtering/index');
    const sign=new Signup(req,res,next);
    req.signup=sign;
    sign.checkInputs(new Validation());
    sign.addUser(); 
    next();
}
module.exports={signupHandler}