const pool = require("./db");
const sql = `SELECT COUNT(employee_id)"Total Number of Employees"
FROM public.employees;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();