/**
 * It handle authorization ressources access
 * @param {Request Object} req 
 * @param {Response Object} res 
 * @param {next} next 
 */
const authRouteHandler=(req,res,next)=>{ 
    const direction =req.originalUrl !="/" ? `/login?redirect=${req.originalUrl}` : "/login";
    req.isAuthenticated() ? next(): res.redirect(direction)
next();
}
/**
 * It handle acces to uneeded resources authorization
 * @param {Request Object} req 
 * @param {Response Object} res 
 * @param {next} next 
 * @returns  {void}
 */
const unauthRouteHandler=(req,res,next)=>{ 
    if(req.isAuthenticated()){ res.redirect('/') ; return; }
    next();
}
module.exports={unauthRouteHandler,authRouteHandler}
