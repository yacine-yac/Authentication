module.exports=async(req,res)=>{
     req.logOut(error=>{
        error &&  res.redirect('/404');
        res.redirect('/login');
     });
    
   
}