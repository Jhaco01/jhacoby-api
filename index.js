const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: "http://127.0.0.1:5500",
}))

const mysql = require('mysql');
const pool  = mysql.createPool({
  connectionLimit : 10,
  host            : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user            : 'bsale_test',
  password        : 'bsale_test',
  database        : 'bsale_test'
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Server running in port ${PORT}`));

app.get('/', (req,res)=>{
    console.log('Welcome to jhacoby-api');
})

app.get('/products', (req,res)=>{

    pool.getConnection((err,conn)=>{
        if (err) {
            return err;
        } else {
            conn.query('SELECT * FROM product',(err2,results,fields)=>{
                if (!err2) {
                    res.json(results);
                }
                conn.release();             
            })
        }

    })
})

app.get('/products/:id', (req,res)=>{
    const {id} = req.params;  
    
    pool.getConnection((err,conn)=>{
        if (err) {
            return err;
        } else {
            conn.query(`SELECT * FROM product WHERE category = ${ id }`,(err2,results,fields)=>{
                if (!err2) {
                    res.json(results);
                }
                conn.release();
            })
        }

    })
})

app.get('/category', (req,res)=>{
    pool.getConnection((err,conn)=>{
        if (err) {
            return err;
        } else {
            conn.query('SELECT * FROM category',(err2,results,fields)=>{
                if (!err2) {
                    res.json(results);
                }
                conn.release();
            })
        }

    })
    
})

app.get('/products/product/:search', (req,res)=>{
    const {search} = req.params;               

    pool.getConnection((err,conn)=>{
        if (err) {
            return err;
        } else {
            conn.query('SELECT * FROM product',(err2,results,fields)=>{
                if (!err2) {
                    const newResults = results.filter( ({name}) => name.toLowerCase().includes(search.toLowerCase()) );
                    res.json(newResults);
                }
                conn.release();             
            })
        }

    })
})