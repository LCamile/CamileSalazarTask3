const pool = require("./db");
const sql = `SELECT AVG(salary)"Average Salary" FROM public.employees;`;


pool.query (sql,(err,res)=>{
    if (err){
    
        console.log (err.stack);
    
    }else{
        console.log (res.rows[0]);
    }
    
    });
    
    pool.end();