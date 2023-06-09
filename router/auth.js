async function auth(req,res,next){
    const {passport}=require('../passport/index.js');
    const {Authentication}=require('../model/auth.js');

console.log(authController.redirect)
    const auth=new Authentication(authController);
    auth.setbadRequestMessage();
    auth.setfailureRedirect();
      passport.authenticate('local', { 
                  failureRedirect:auth.redirection, 
                  failureFlash:true,
                  badRequestMessage:auth.message,
                  failureMessage:true,
      })(req,res,next);

}
function direction(req,res){
  console.log(req.session)
  const direction =req.query.redirect ?? "/";
  res.redirect(direction);
}
function authController(req,res,next){
  const {Validation}=require('../model/filtering/index.js');
  const {AuthenticationController}= require('../controller/auth.js');
  const authController=new AuthenticationController(req);
  authController.setCredentials(); 
  authController.check();
  authController.validation(new Validation());
  next();
}
module.exports={direction,auth,authController} 
   
 