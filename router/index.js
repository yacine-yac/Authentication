module.exports=(req,res)=>{
    res.render('../views/index.ejs',{
        title:"Welcom",
        templatePath:"../views/login.ejs",
        path:`/auth${ req.query.redirect ? '?redirect='+req.query.redirect : ''}`,
        message:null,
        script:'js/index.js'
    });
}