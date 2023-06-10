class AuthError{
    constructor(){
            this.email=null;
            this.password=null;
            this.global=null;
    }
    setEmail(message){
        this.email=message;
    }
    setPassword(message){
        this.password=message;
    }
    setGlobal(message){
        this.global=message;
    }

}
module.exports={AuthError};