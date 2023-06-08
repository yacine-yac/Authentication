

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
                this.status=false;
                this.errorMessage=null;
    }
    checkInputs(){
        const {name,sex,birth,email,password}=this.req.body;
        const {isEmail,isDate,isAlpha,isAlphanumeric}=require('validator');
        console.log(birth,isDate(birth,{strictMode:true}));
        if(!name || !isAlpha(name)){this.status=false;this.errorMessage="name not exists"; this.next();} 
        if(!sex || !/^(Famale|Male)$/g.test(sex)){this.status=false;this.errorMessage="sex not exists"; this.next();} 
        if(!birth || !isDate(birth,{delimiters:['.','/', '-']})){this.status=false;this.errorMessage="birth not exists"; this.next();}
        if(!email || !isEmail(email)){this.status=false;this.errorMessage="email not exists"; this.next();}
        if(!password || !isAlphanumeric(password)){this.status=false;this.errorMessage="password not exists"; this.next();}

        this.setUser();
    }
    setUser(){
        const User=require('./user'),params=Object.values(this.req.body)
        this.user=new User(...params);
        this.user.setId(this.generateId());
    }
    addUser(){
            if(this.user?.exists()){
                this.status=false;
                this.errorMessage="User already exists !";
                this.next();
            }
            const insert=this.user?.add();
            insert 
                    ? (this.status=true ) 
                    : (this.errorMessage="Insert user error",this.status=false,this.next());
    }
    login(){
        const session={id:this.user.id,name:this.user.name};
        this.req.logIn(session,(err)=>{
            if(err){ this.status=false;}
            this.res.json({status:this.status,messge:"succes, creation"})
        });
    }
    generateId(){
        return 'fdsfsf';
    }
    redirect(){

    }
}
module.exports={Signup}