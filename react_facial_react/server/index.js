const express = require('express')
const app = express()
const port = 3000
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


app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => {
    console.log(`Server running on port 4000`)
});
