module.exports=(req,res)=>{
    res.render('../views/login.ejs',{ 
        path:`/auth${ req.query.redirect ? '?redirect='+req.query.redirect : ''}`,
        message:req.flash('error')
    });
}