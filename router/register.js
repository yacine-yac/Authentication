module.exports=(req,res,next)=> {
    res.render('../views/index.ejs',{
        title:"Register",
        templatePath:"../views/register.ejs",
        script:'js/register.js',
        message:null
    })
}