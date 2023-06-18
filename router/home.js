module.exports=async(req,res)=>{
    
     if(req.isAuthenticated()==false){
          const redirected=require('./index');
          redirected(req,res);
     }else{
           const data =require('../model/fetchUserData');
           const {name,birth,sex}=await data(req?.user.id);
           res.render('../views/home.ejs',{name,birth,sex});
     }
}