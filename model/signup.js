

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

    checkInputs(validate){
        const {name,sex,birth,email,password}=this.req.body;
 
        validate.alphabets(name,{message:"Please enter a valid name (with only alphabets)"});
        validate.email(email,{message:'Please enter a valid  email'});
        validate.date(birth,{message:'Please enter a valid date Please fill in a complete birthday'});
        validate.match(sex,["Famale","Male"],{message:"Please select your gender"});
        validate.alphaNumeric(password,{message:"Enter a password Please enter a valid password (with alphabets,numeric and more then 8 charcters"});
        validate.error.length > 0 
                    ? (
                        this.status=false,
                        this.errorMessage=validate.error[0],this.next()) 
                    :   this.setUser();
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