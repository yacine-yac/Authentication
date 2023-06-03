const passport=require('passport');
const LocalPassport=require('passport-local');
const auth=new LocalPassport(checking);
function checking(email,password,callback){
    /** callback accepts two params 
     * 1=> error handling
     * 2=> user (it can be user object or false)
     * 3=> message object 
     */
    if(!email) return callback(null,false,{message:"Please, provide your email"})
    if(!password) return callback(null,false,{message:"Please, provide your password"})
    return callback(null,{name:"yacine"})
}
passport.use(auth);