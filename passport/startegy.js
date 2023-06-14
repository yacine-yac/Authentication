const passport=require('passport');
const LocalPassport=require('passport-local');

const auth=new LocalPassport({usernameField:"email",passwordField:"password",passReqToCallback: false},checking);
async function checking(email,password,callback){
    /** callback accepts two params 
     * 1=> error handling
     * 2=> user (it can be user object or null)
     * 3=> message object 
     */
    const {User}=require('../model/user')
    const {AuthenticationController}=require('../controller/auth');
    const controller=AuthenticationController.main;
    const {email:e_email,password:e_password,global}=controller.error;
    if(e_email  || e_password || global){
        return callback(null,false,controller.error);
    }
    const user=new User();
    user.main.setEmail(email).setPassword(password);

    if(!(await user.identify())){
        controller.error.global="User not exist"
        return callback(null,false,controller.error)
    }

    if(!(await user.checkPassword())){
        controller.error.global="Password not correct, try again"
        return callback(null,false,controller.error)
    }

    return callback(null,user.session)
}
passport.use("local",auth); 