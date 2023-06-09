module.exports=(req,res)=>{

     if(req.isAuthenticated()==false){
          const redirected=require('./index');
          redirected(req,res);
     }else{ 
          res.render('../views/home.ejs',{name:req.user.name});
     }
}