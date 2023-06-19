const {parsed}=require('dotenv').config();
const dbConfiguration={
    host: parsed.DB_HOST, // IP address of MySQL server
    port: parsed.DB_PORT,
    database: 'myapp',
    user: parsed.DB_USER,
    password: parsed.DB_PASSWORD
};
module.exports={dbConfiguration}