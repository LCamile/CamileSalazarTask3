const pool = require("./db");
const sql = `SELECT
hire_date "date", SUM (salary) "total_salary" FROM public.employees
GROUP BY hire_date ORDER BY hire_date ASC;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();