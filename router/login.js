module.exports=(req,res)=>{
    const {email,password,global}=req.flash('login')[0] ?? {};
    res.render('../views/index.ejs',{
        title:"Login",
        templatePath:"../templates/tmpl/login.ejs",
        path:`/auth${ req.query.redirect ? '?redirect='+req.query.redirect : ''}`,
        script:'js/index.js',
        error:{
            message:global,
            email,
            password
        }
    });
}