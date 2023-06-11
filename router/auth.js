const {AuthenticationController}=require('../controller/auth');
async function auth(req,res,next){
    const {passport}=require('../passport/index.js');
    const {Authentication}=require('../model/auth.js');

    const authModel=new Authentication(AuthenticationController.main);
    
    req.flash('login',authModel.auth.error);

           passport.authenticate('local', {
                  // failureRedirect:authModel.redirection,
                  failWithError:true,
                  // failureFlash:true,
                  // failureMessage:true
                  // successRedirect:"/about"
          },(defError,user,info)=>{
             const error=authModel.auth.error;
                 if(error.email || error.password || error.global) 
                         authModel.redirect();
                 else
                          authModel.login(user);
          })(req,res,next);
     AuthenticationController.destroy();


}
function authController(req,res,next){
  const {Validation}=require('../model/filtering/index.js'); 
  const {AuthError}=require('../model/authError');
  const authController= AuthenticationController.init(req,new AuthError());
  authController.setCredentials(); 
  authController.check(); 
  authController.validation(new Validation());
  next();
}
module.exports={auth,authController} 
   
 