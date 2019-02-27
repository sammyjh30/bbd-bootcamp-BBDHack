const express = require('express');
const app = express();
const mssql = require('mssql')

const db_config = {
    server : 'localhost',
    password : 'whatever',
    user : 'YamkelaZ',
    database : 'Facial_RecogDB',
    port: 50092
};

const pool = new mssql.ConnectionPool(db_config);
 pool.connect((err, result) => {
     if (err){
         console.log('Error could not connect to the database');
     }
    else {
        console.log("CONNECTED");
    }
 })
