const passport=require('passport');
const LocalPassport=require('passport-local');

const auth=new LocalPassport({usernameField:"email",passwordField:"password",passReqToCallback: false},checking);
function checking(email,password,callback){
    /** callback accepts two params 
     * 1=> error handling
     * 2=> user (it can be user object or false)
     * 3=> message object 
     */
    return callback(null,{name:"yacine",id:888})
}
passport.use("local",auth); 