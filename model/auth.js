class Authentication{
    constructor(auth){
        this.auth=auth;
        this.message=null;
        this.redirection=null;
    }
    setbadRequestMessage(){
         this.message =this.auth.error;
    }
    setfailureRedirect(){ 
      this.redirection=`/login${ this.auth.redirect ? '?redirect='+this.auth.redirect : ""}`;
    }
}
module.exports={Authentication}