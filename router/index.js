module.exports=(req,res)=>{
    const {email,password,global}=req.flash('login')[0] ?? {};
    res.render('../views/index.ejs',{
        title:"Welcom",
        templatePath:"../templates/tmpl/login.ejs",
        path:`/auth${ req.query.redirect ? '?redirect='+req.query.redirect : ''}`,
        error:{
            message:global,
            email,
            password
        },
        script:'js/index.js'
    });
}