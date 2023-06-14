async function signupHandler(req,res,next){
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
    const {Validation}=require('../model/filtering/index');
    const {SignupController}= require('../controller/signup/index');
    const {SignupState}=require('../model/signupState.js')
    req.signup=new SignupState();
    const signupcontroller=new SignupController(req,new Validation());
    signupcontroller.check();
    signupcontroller.validation();
    if(req.signup.status){
          const {Signup}= require('../model/signup');
          const sign=new Signup(req,res,next);
          req.signup=sign;
          sign.setUser(signupcontroller.getInputs());
         await sign.addUser();
    }
    next();
}

function signupAction(req,res){ 
      if(req.signup.status){
          req.signup.login();
      }else{
          res.status(401).json({message:req.signup.errorMessage,status:req.signup.status})
      }
  }
module.exports={signupHandler,signupAction}