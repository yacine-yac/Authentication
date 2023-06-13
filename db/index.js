const {dbConfiguration}=require('./config');
class DataBase{
    constructor(){
        this.mysql=require('mysql'); 
        this.status=false;
        this.db= this.mysql.createConnection(dbConfiguration);
        this.error=null;
        this.connect();
    }
    async connect(){

        try{
            this.db.connect();
            this.status=true;
        }catch(error){
            this.status=false;
            this.error=error
        }

    }
    async query(query){ 

        const  {results , error, fields}=  this.db.query(query);
        console.log("end query=============",this.status);
        
 
    }
    disconnect(){
        this.db.end();
    }
}

module.exports={DataBase}