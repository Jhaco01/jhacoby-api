const express = require('express')
const app = express()

var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'mdb-test.c6vunyturrl6.us-west-1.rds.amazonaws.com',
  user     : 'bsale_test',
  password : 'bsale_test',
  database : 'bsale_test'
});

const connect = () => {
    connection.connect( err => {
    err ? err : console.log('Database server running');
})}

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>console.log(`Server running in port ${PORT}`));

app.get('/', (req,res)=>{
    console.log('Welcome to jhacoby-api');
})

app.get('/products', (req,res)=>{
    const sql = 'SELECT * FROM product';
    connect();
    connection.query(sql, (err, results) => {
        if (err) return err;
        if (results.length > 0 ) {
            res.send(results);
        } else {
            res.send('No results found.')
        }
    }) 
})

app.get('/products/:id', (req,res)=>{
    const {id} = req.params;        
    const sql = `SELECT * FROM product WHERE category = ${ id }`;
    connect();
    connection.query(sql, (err, result) => {        
        if (err) return err;
        if (result.length > 0 ) {
            res.json(result);
        } else {
            res.send('No results found.')            
        }
    })
})

app.get('/category', (req,res)=>{
    const sql = 'SELECT * FROM category';
    connect();
    connection.query(sql, (err, results) => {
        if (err) return err;
        if (results.length > 0 ) {
            res.json(results);
        } else {
            res.send('No results found.')
        }
    }) 
})