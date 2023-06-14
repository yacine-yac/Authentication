module.exports=(req,res,next)=> {
    res.render('../views/index.ejs',{
        title:"Register",
        templatePath:"../templates/tmpl/register.ejs",
        script:'js/register.js',
        error:{ message:null}
    })
}