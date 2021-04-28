const pool = require("./db");
const sql = `SELECT
job_id "JOB_ID",COUNT(employee_id) "#",MIN(salary) "Minimum",
AVG(salary) "Average",MAX(salary) "Maximum",STDDEV(salary) "Std Dev"
FROM
public.employees
GROUP BY job_id ORDER BY job_id ASC;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows);
    }
    
    });
    
    pool.end();