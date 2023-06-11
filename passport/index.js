const  passport=require('passport')
require('./startegy')

passport.serializeUser((user,done)=>{ 
      return  done(null,user) 
});
passport.deserializeUser((user,done)=>{ 
    return done(null,user);
}); 
module.exports={passport}
