const express = require('express')
const app = express()
const port = 4000
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'Facial_RecogDB'
})

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')
})
app.get('/getAllUsers', function(req, res) {
    connection.query('SELECT * FROM Users', function (err, rows) {
     if (err) res.send(err)
     else res.send(rows)
   })
 })
/////

app.get('/addUser', function(req, res) {
    data = req.body;
    connection.query("INSERT INTO Users (firstName, lastName, position) VALUES "+"('"+data.firstname+"', '"+data.lastname+"', '"+data.position+"')", function (err, rows) {
     if (err) res.send(err)
     else res.send(rows)
   })
 })

app.get('/addUserImages', function(req, res) {
    data = req.body;
    connection.query("INSERT INTO Reference_images (userID, front_side, right_side, left_side) VALUES ('"+ data.user_id+"', '"+data.f_image+"', '"+data.r_image+"','"+data.l_image+"'')", function (err, rows) {
     if (err) res.send(err)
     else res.send(rows)
   })
 })

// app.get('/getUserByID', function(req, res) {
//     data = req.body;
//     connection.query("SELECT * FROM Users WHERE userID = '"+ data.uid +"'", function (err, rows) {
//      if (err) res.send(err)
//      else res.send(rows)
//    })
//  })
app.get('/getUserByName/:name', function(req, res) {
    // data = req.body;
    data = req.body || req.params;
    connection.query("SELECT * FROM Users WHERE firstName = '"+ data.name +"'", function (err, rows) {
     if (err) res.send(err)
     else res.json(rows)
   })
 })
////////



app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`Server running on port 4000`)
});
