module.exports=async(req,res)=>{
    req.logOut();
    res.redirect('/login');
}