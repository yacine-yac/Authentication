module.exports=(req,res)=>{

     if(!req.isAuthenticated()){
         console.log('ffdf',req.isAuthenticated());
          const redirected=require('./index');
          redirected(req,res);
     }
          res.render('../views/home.ejs',{name:req.user.name});
}