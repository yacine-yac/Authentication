async function auth(req,res,next){
    const {passport}=require('../passport/index.js');
    const checkCredentials=(req)=>{
       const {email,password}=req.method =='POST' ? req.body : req.query;
       console.log(req.query,req.body ,">>>>>>>>>>")
       if(!email) return "Please, provide your email";
       if(!password) return  "Please, provide your password";
       return null;
    }
    
      passport.authenticate('local', { 
                  failureRedirect:'/login', 
                  failureFlash:true,
                  badRequestMessage:checkCredentials(req),
                  failureMessage:true,
      })(req,res,next);  
         
}
function direction(req,res){
  console.log(req.session)
  const direction =req.query.redirect ?? "/";
  res.redirect(direction);
}

module.exports={direction,auth} 
  
  // require('passport').authenticate('local',{failureRedirect:'/login'})
 