module.exports=(req,res)=>{
     res.render('../views/home',{name:req.user.name});
}