const {User}=require('./user'); 
const bcrypt=require('bcrypt');
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
    setUser({email,password,birth,name,sex}){
        this.user=new User();
        this.user.main.setId(this.generateId())
                      .setEmail(email)
                      .setPassword(password)
                      .setName(name)
                      .setSex(sex)
                      .setBirth(birth);
    }
    async encryptPassword(){
       const hash=await bcrypt.hash(this.user.main.password,10,);
       this.user.main.setPassword(hash);
    }
    async addUser(){
            await this.user?.add().then(inserted=>{
                        this.req.signup.status=true;
                }).catch(error=>{
                        this.req.signup.status=false;
                        this.req.signup.errorMessage= error.sqlState==23000 ? "User already exists !":  "Insert user error" ;  
                        this.next();
                });
    }
    login(){
        const session={id:this.user.id,name:this.user.name};
        this.req.logIn(session,(err)=>{
            if(err){ this.req.signup.status=false;}
            this.res.json({status:this.status,messge:"succes, creation"})
        });
    }
    generateId(){
        const {v4}=require("uuid");
        return v4();
    }
}
module.exports={Signup}