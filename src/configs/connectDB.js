// get the client
import mysql from "mysql2/promise";
// create the connection to database
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    database: 'nodejs_basic'
    //password: 
});




export default pool