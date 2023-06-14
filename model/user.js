/**
 * Handle user operations 
 */
class User{
    constructor(){
        this.main=new UserBuilder();
        this.vMain=null; 
            this.session={name:"amine",age:65}
    
    }
    add(){
        // insert into DB
        return true;
    }
    exists(){
            // check email exists in bdd
        return false;
    }
      setvMain({id,password,name}){ 
        this.vMain= new UserBuilder();
        this.vMain.setId(id).setName(name).setPassword(password);
    }
    setId(id){
        this.id=id;
    }
    async identify(){
        const {DataBase}=require('../db/index');
        const connection=new DataBase();
        const dbRequest=await connection.query(`SELECT id,password,name from user where email="${this.main.email}" `)
                        .then(response=>{ return {response,state:response.length>0 ? true :false}})
                        .catch(error=>{return {error:error.sqlMessage,state:false}});
       
        dbRequest.state && this.setvMain(dbRequest.response[0]);
        return dbRequest.state;
    }
    async checkPassword(){
        // compare main.password with vMain.password
      const bcrypt=require('bcrypt');
      const check= await bcrypt.compare(this.main.password,this.vMain.password); 
        return check;
    }
}

/**
 * Used for build User Object
 */
class UserBuilder{
    constructor(){
        this.id=null;
        this.name=null;
        this.sex=null;
        this.birth=null;
        this.email=null;
        this.password=null;
    }
    setName(name){
            this.name=name;
            return this;
    }
    setBirth(birth){
        this.birth=birth;
        return this;
    }
    setSex(sex){
        this.sex=sex;
        return this;
    }
    setEmail(email){
        this.email=email;
        return this;
    }
    setPassword(password){
        this.password=password;
        return this;
    }
    setId(id){
        this.id=id;
        return this;
    } 
}


module.exports={User,UserBuilder};