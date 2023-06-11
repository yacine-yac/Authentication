
/**
 * Handle Authentication Response
 */
class Authentication{
  /**
   * 
   * @param {AuthenticationController} auth used to fetch error
   */
    constructor(auth){
        this.auth=auth;
    }
    /**
     * responses will be in json format
     * @param {AuthError} message
     * @returns {JSON}
     */
    responseWithMessage(message){
           return this.auth.req.res.json(message);
    }
    /**
     * redirect user to specifc path after login
     * @param {} user user session
     */
    redirectionResponse(user){
        const direction =this.auth.req.query.redirect ?? "/"; 
        this.auth.req.logIn(user,(err)=>{
                if(err){this.responseWithMessage(err)}
                this.auth.req.res.redirect(direction);
            });
        }
}
module.exports={Authentication}