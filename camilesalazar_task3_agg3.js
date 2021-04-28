const pool = require("./db");
const sql = `SELECT
MIN(salary),MAX(salary)
FROM
public.employees
WHERE
department_id = 60;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();