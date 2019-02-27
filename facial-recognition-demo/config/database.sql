USE master;

CREATE DATABASE Facial_recogDB;

USE Facial_recogDB;

-- Creates our main users table
CREATE TABLE [dbo].[Users](
	[userID] [int] IDENTITY NOT NULL,
	[firstName] [varchar](50) NULL,
	[lastName] [varchar](50) NULL,
	[position] [varchar](50) NULL,
	CONSTRAINT PK_userID PRIMARY KEY(UserID)
);
GO

-- Creates a table to store reference images for facial recognition
CREATE TABLE [dbo].[Reference_images](
    [imageID][int] IDENTITY (1, 1) NOT NULL,
    [userID][int] NOT NULL,
    [front_side][varbinary](max),
    [right_side][varbinary](max),
    [left_side][varbinary](max),
    CONSTRAINT PK_imageId PRIMARY KEY (ImageID),
    CONSTRAINT FK_Ref_images_userID FOREIGN KEY (userID) REFERENCES Users(userID)
);
GO

-- Procedure for adding a new user on the users table
CREATE PROCEDURE addUser(@fname VARCHAR(50), @lname VARCHAR(50), @position VARCHAR(50))
AS
INSERT INTO Users(firstName, LastName, Position)
VALUES (@fname, @lname, @position);
GO


CREATE PROCEDURE removeUser(@user_id INT)
AS
DELETE FROM Users
WHERE users.userID = @user_id;
GO


CREATE PROCEDURE updateUser(@user_id INT, @fname VARCHAR(50), @lname VARCHAR(50), @position VARCHAR(50))
AS
UPDATE Users
SET Users.firstName = @fname, Users.lastName = @lname, Users.position  = @position
WHERE Users.userID = @user_id;
GO
