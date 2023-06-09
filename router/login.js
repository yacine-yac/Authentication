module.exports=(req,res)=>{
    res.render('../views/index.ejs',{
        title:"Login",
        templatePath:"../templates/tmpl/login.ejs",
        path:`/auth${ req.query.redirect ? '?redirect='+req.query.redirect : ''}`,
        script:'js/index.js',
        message:req.flash('error')
    });
}