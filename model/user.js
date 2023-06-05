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
        return true;
    }
    setId(id){
        this.id=id;
    }
}
module.exports=User;