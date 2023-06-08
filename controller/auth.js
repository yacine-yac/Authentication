class AuthenticationController{
    constructor(req){
        this.req=req;
        this.method=req.method;
        this.email=null;
        this.password=null;
        this.redirect=req.query.redirect ?? null;
        this.error=[];
    }
    setCredentials(){
        const data=this.method =='POST' ? this.req.body : this.req.query;
        this.email=data?.email;
        this.password=data?.password;
    }
    check(){
            if(!this.email){ this.error.push({email:"Please, provide an email"});}
            if(!this.password){this.error.push({password:"Please, provide a password"});}
           return  this.error.length>0 ? false : true;
    }
    validation(validation){
        if(this.error.length>0){ return;}

        validation.email(this.email,{message:{email:"Please, provide a valide email"}});
        validation.alphaNumeric(this.password,{message:{password:"Please, provide a valide password"}});
        validation.alphabets(this.redirect,{message:"Bad request, check your Url"});
        this.error= validation.error;
        return this.error.length>0 ? false : true;
    }
}
module.exports={AuthenticationController};