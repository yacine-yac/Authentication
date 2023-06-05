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
        if(!name){this.status=true; next();} 
        if(!sex){this.status=true; next();} 
        if(!birth){this.status=true; next();}
        if(!email){this.status=true; next();}
        if(!password){this.status=true; next();}

        this.setUser();
    }
    setUser(){
        const User=require('./user');
        this.user=new User(...this.req.body);
        this.user.setId(this.generateId());
    }
    addUser(){
            if(this.user.exists()){
                this.status=true;
                this.errorMessage="User already exists !";
                this.next();
            }
            const insert=this.user.add();
            insert 
                    ? (this.status=true ) 
                    : (this.errorMessage="Insert user error",this.status=false,this.next());
    }
    login(){
        const session={id:this.user.id,name:this.user.name};
        req.logIn(session,(err)=>{
            if(err){ this.status=false; }
            
        });
    }
    generateId(){
        return 'fdsfsf';
    }
    redirect(){

    }
}
module.exports={Signup}