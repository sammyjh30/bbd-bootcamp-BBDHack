const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'admin',
});


connection.connect(function (err) {
	if (err) throw err;

	console.log('Recreating Facial_RecogDB database...')
	connection.query('DROP DATABASE IF EXISTS Facial_RecogDB');
	connection.query('CREATE DATABASE Facial_RecogDB');

	connection.changeUser({database : 'Facial_RecogDB'}, function(err) {
		if (err) throw err;
	});

	console.log('Deleting old tables...')
	connection.query('DROP TABLE IF EXISTS Users');
	connection.query('DROP TABLE IF EXISTS Reference_images');

	console.log('Initiating tables...')
	connection.query("CREATE TABLE `Users`(\
        `userID` int unsigned NOT NULL,\
        `firstName` varchar(50) NULL,\
        `lastName` varchar(50) NULL,\
        `position` varchar(50) NULL,\
        CONSTRAINT PK_userID PRIMARY KEY(UserID))");

	connection.query("CREATE TABLE `Reference_images`(\
        `imageID` int unsigned NOT NULL,\
        `userID` int unsigned NOT NULL,\
        `front_side` varchar(255),\
        `right_side` varchar(255),\
        `left_side` varchar(255),\
        CONSTRAINT PK_imageId PRIMARY KEY (`ImageID`),\
        FOREIGN KEY FK_Ref_images_userID (`userID`) REFERENCES Users (`userID`))");


				

	console.log('Creating fake profiles...')

	connection.query(`INSERT INTO Users (userID, firstname, lastname, position)\
		VALUES (2004, 'Sam', 'Hillebrand', 'Intern')`);
		
		connection.query(`INSERT INTO Users (userID, firstname, lastname, position)\
    VALUES (1933, 'Chanel', 'Letinic', 'Intern')`);

		connection.query(`INSERT INTO Users (userID, firstname, lastname, position)\
		VALUES (1931, 'Dovi', 'Kaplan', 'Intern')`);
		connection.query(`INSERT INTO Users (userID, firstname, lastname, position)\
    VALUES (19946, 'Yamkela', 'Zungula', 'Intern')`);

	console.log('Sucess!');
	console.log('Exiting...');
	connection.end();
})