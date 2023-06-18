module.exports=(req,res)=>{
    const {email,password,global}=req.flash('login')[0] ?? {};
    res.render('../views/index.ejs',{
        title:"Welcom To user space",
        templatePath:req.path =="/" ? "../templates/tmpl/login.ejs" : null,
        path:`/auth${ req.query.redirect ? '?redirect='+req.query.redirect : ''}`,
        error:{
            message:global,
            email,
            password
        },
        script:'js/index.js'
    });
}