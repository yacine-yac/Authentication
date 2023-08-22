const {dbConfiguration}=require('./config');
class DataBase{
    constructor(){
        this.mysql=require('mysql2'); 
        this.status=false;
        this.db= this.mysql.createConnection(dbConfiguration);
        this.error=null;
        this.response=null;
        this.connect();
    }
    async connect(){

        try{
            this.db.connect();
            this.status=true;
        }catch(error){
            this.status=false;
            this.error=error;  
        }

    }
    query(query){
        return  new Promise((resolve,reject)=>{
                        this.db.query(query,(error,response)=>{
                            if(error) return reject(error);
                            if(response) return resolve(response);
                    });
        });
    }
    disconnect(){
        this.db.end();
    }
}

module.exports={DataBase}