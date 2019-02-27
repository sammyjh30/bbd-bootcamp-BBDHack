const express = require('express');
const app = express();
const mssql = require('mssql')

// app.listen(4200, () => {
//     console.log("Server started on port: 4200");
// });

const config = {
    server : 'localhost',
    password : 'whatever',
    user : 'YamkelaZ',
    database : 'Facial_RecogDB',
    port: 50092
};

(async function () {
    try {
        let pool = await mssql.connect(config)
        console.dir("Connected to the database");
    } catch (err) {
        // ... error checks
        console.error(err);;
    }

    async function get_user(user_id){
        let result1 = await pool.request()
        .input('uid', mssql.Int, user_id)
        .query('SELECT * from Users WHERE userID = @uid')
        return (result1);
    }


    function add_user(uid, firstname, lastname, position)
    {
        const request = new mssql.Request()
        request.query("INSERT INTO Users (firstName, lastName, position) VALUES "+"('"+uid+"',"+firstname+"', '"+lastname+"', '"+position+"')")
        .then(result => {
            console.log(result.rowsAffected)
        })
    }

    function add_user_images(user_id, f_image, r_image, l_image){
        const request = new mssql.Request()
        request.query("INSERT INTO Reference_images (userID, front_side, right_side, left_side) VALUES ('"+user_id+"', '"+f_image+"', '"+r_image+"','"+l_image+"'')")
        .then(result => {
            console.log(result.rowsAffected)
        })
    }
    
})()

mssql.on('error', err => {
    // ... error handle
    console.log("An error occured");
})
