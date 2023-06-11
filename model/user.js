/**
 * Handle user operations 
 */
class User{
    constructor(name,sex,birth,email,password){
        this.id=null;
        this.name=name;
        this.sex=sex;
        this.birth=birth;
        this.email=email;
        this.password=password;
    }
    add(){
        // insert into DB
        return true;
    }
    exists(){
            // check email exists in bdd
        return false;
    }
    setId(id){
        this.id=id;
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
    build(){
        return new User(this.name,this.sex,this.birth,this.email,this.password);
    }
}


module.exports={User,UserBuilder};