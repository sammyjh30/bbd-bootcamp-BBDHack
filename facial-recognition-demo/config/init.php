<?php
    require_once "setup.php";
    $DB_object = new Database();
    $DB_object.create_database();
    $db_conn = $DB_object.connection();


    /**
    * creates a users table for storing BBD employees basic info
    */
    $sql = "CREATE TABLE [dbo].[Users](
        [userID][INT] IDENTITY (1, 1) NOT NULL,
        [firstName][VARCHAR](50) NOT NULL,
        [lastName][VARCHAR](50) NOT NULL,
        [postion][VARCHAR](50) NOT NULL,
        CONSTRAINT PK_userID PRIMARY KEY(userID)
    )";
    $DB_object.run_query($sql);

    /**
    * creates a Reference_images table to store images to be used as references
    * for the image recognition api
    */
    $sql = "CREATE TABLE [dbo].[Reference_images](
        [imageID][int] IDENTITY (1, 1) NOT NULL,
        [userID][int] NOT NULL,
        [front_side_image][varbinary](max),
        [right_side_image][varbinary](max),
        [left_side_image][varbinary](max),
        CONSTRAINT PK_imageID PRIMARY KEY (ImageID),
        CONSTRAINT FK_ref_images_userID FOREIGN KEY (UserID) REFERENCES Users(UserID)
    )";
    $DB_object.run_query($sql);
 ?>
