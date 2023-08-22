const {DataBase}=require('../db/index');
const bcrypt=require('bcrypt');
/**
 * Handle user operations 
 */
class User{
    constructor(){
        this.main=new UserBuilder();
        this.vMain=null; 
    }
    /** add user into db */
    async add(){
        const db=new DataBase(); 
        const values=Object.values(this.main).reduce((x,y)=>x+`"${y}",`,``).slice(0,-1);
        const keys=Object.keys(this.main);
        const rq= await db.query(`INSERT INTO users (${keys}) VALUES (${values}) `);

        return rq;
    }
    /**
     * check if user exists or no
     * @returns Boolean
     */
    exists(){
            // check email exists in bdd 
                const db=new DataBase();
                const userexist= db.query(`SELECT id  FROM users where email="${this.main.email}"`)
                            .then(x=>{
                                return x.length>0 ?{exist:true}: {exist:false,id:x[0].id};
                            }).catch(y=>{
                                return {exist:false};
                            })
        return userexist;
    }
    /**
     * build user object (main property)
     * @param {{id:string,password:string,name:string}} param0 
     */
    setvMain({id,password,name}){ 
        this.vMain= new UserBuilder();
        this.vMain.setId(id).setName(name).setPassword(password);
    }
    setId(id){
        this.id=id;
    }
    /**
     * identify user by email and return his properties (password,id,name);
     * @returns Boolean
     */
    async identify(){
        const connection=new DataBase();
        const dbRequest=await connection.query(`SELECT id,password,name from users where email="${this.main.email}" `)
                        .then(response=>{ return {response,state:response.length>0 ? true :false}})
                        .catch(error=>{return {error:error.sqlMessage,state:false}});
       
        dbRequest.state && this.setvMain(dbRequest.response[0]);
        return dbRequest.state;
    }
    /**
     * compare password provide by user into password stored in db
     * @returns Boolean
     */
    async checkPassword(){
        // compare main.password with vMain.password
        const check= await bcrypt.compare(this.main.password,this.vMain.password); 
        return check;
    }
    fetchData(columns){
        const db= new DataBase();
        const response=db.query(`select ${columns.join(",")} from users where id="${this.main.id}" `)
        .then(x=>x.length>0 ? x[0] : {error:'user not found'} ).catch(err=>err);
        return response;
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