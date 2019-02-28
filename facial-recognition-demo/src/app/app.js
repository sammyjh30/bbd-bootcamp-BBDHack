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
        console.log("ERROR: could not connect to the database");
        console.error(err);;
    }


    function add_user(firstname, lastname, position)
    {
        // request.query(`INSERT INTO Users (userID, firstName, lastName, position)
        //                 VALUES (uid, firstname, lastname, pos)`)
        const request =  new mssql.Request()
            request.query("INSERT INTO Users (firstName, lastName, position) VALUES "+"('"+firstname+"', '"+lastname+"', '"+position+"')")
            .then(result => {
            console.log(result.rowsAffected);
            console.log("User added");
        })
    }

    function add_user_images(user_id, f_image, r_image, l_image){
        const request =  new mssql.Request()
        request.query("INSERT INTO Reference_images (userID, front_side, right_side, left_side) VALUES ('"+user_id+"', '"+f_image+"', '"+r_image+"','"+l_image+"'')")
        .then(result => {
            console.log(result.rowsAffected);
        })
    }

     function get_user_by_ID(uid){
        const request = new mssql.Request()
            request.query("SELECT * FROM Users WHERE userID = '"+uid+"'")
            .then(result => {
            console.log(result);
            // console.log(result.rowsAffected)
            return (result.recordset);
        })
    }

    function get_users(){
       const request = new mssql.Request()
           request.query("SELECT * FROM Users")
           .then(result => {
           console.log(result.recordset);
           console.log(result.rowsAffected)
           return ( result.recordset);
       })
   }
    // add_user("Yamkela", "Zungula", "Intern");
    // let user = get_user_by_ID(1);
    let users = get_users();
    console.log(users);
})()
