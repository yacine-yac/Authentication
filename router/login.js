module.exports=(req,res)=>{  
    res.render('../views/login.ejs',{
        redirectParam:req.query.redirect ?? "",
        message:req.flash('error')
    });
}