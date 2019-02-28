const express = require('express');
const app = express();
const mssql = require('mssql')

const config = {
    server : 'localhost',
    user : 'YamkelaZ',
    password : 'whatever',
    database : 'Facial_RecogDB',
    port: 50092
};

(async function () {
    try {
        let pool = await mssql.connect(config)
        console.dir("Connected to the database");
    } catch (err) {
        // ... error checks
        console.log("ERROR: could not connect to the database");
        console.error(err);;
    }


    function add_user(firstname, lastname, position)
    {
        const request =  new mssql.Request()
            request.query("INSERT INTO Users (firstName, lastName, position) VALUES "+"('"+firstname+"', '"+lastname+"', '"+position+"')")
            .then(result => {
            console.log(result.rowsAffected);
            console.log("User added");
        })
    }

    function add_user_images(user_id, f_image, r_image, l_image){
        const request =  new mssql.Request()
        request.query("INSERT INTO Reference_images (userID, front_side, right_side, left_side)"+
                    " VALUES ('"+user_id+"', '"+f_image+"', '"+r_image+"','"+l_image+"'')")
        .then(result => {
            console.log(result.rowsAffected);
        })
    }

     function get_user_by_ID(uid){
        const request = new mssql.Request()
            request.query("SELECT * FROM Users WHERE userID = '"+uid+"'")
            .then(result => {
            // console.log(result);
            console.log(result.rowsAffected)
            return (result.recordset);
        })
    }

    function get_users(){
       const request = new mssql.Request();
           request.query("SELECT * FROM Users")
           .then(result => {
        //    console.log(result.recordset);
           console.log(result.rowsAffected)
           return (result.recordset);
       })
   }
})()
