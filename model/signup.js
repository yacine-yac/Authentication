

/**
 * Handle user signup
 */
class Signup{
    /**
     * 
     * @param {Request} req 
     * @param {Response} res 
     * @param {next} next 
     */
    constructor(req,res,next){
                this.req=req;
                this.res=res;
                this.next=next;
                this.user=null;
    }
    setUser(user){
        const User=require('./user');
        // params=Object.values(this.req.body)
        this.user=new User(...Object.values(user));
        this.user.setId(this.generateId());
    }
    addUser(){
            if(this.user?.exists()){
                this.req.signup.status=false;
                this.req.signup.errorMessage="User already exists !";
                this.next();
            }
            const insert=this.user?.add();
            insert 
                    ? (this.req.signup.status=true ) 
                    : (
                        this.req.signup.errorMessage="Insert user error",
                        this.req.signup.status=false,
                        this.next()
                    );
    }
    login(){
        const session={id:this.user.id,name:this.user.name};
        this.req.logIn(session,(err)=>{
            if(err){ this.req.signup.status=false;}
            this.res.json({status:this.status,messge:"succes, creation"})
        });
    }
    generateId(){
        return 'fdsfsf';
    }
}
module.exports={Signup}