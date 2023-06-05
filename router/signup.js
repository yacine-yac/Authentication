module.exports=(req,res,next)=>{
 /** *** Sign up Steps
         * check inputs
         * check client
         * generate id for DB
         * insert into database
         * open session
         * redirect
  *  */
    const {Signup}= require('../model/signup')
    const sign=new Signup(req,res,next);
    sign.checkInputs();
}

module.exports={Signup};