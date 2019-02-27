<?php
    require_once '../config/setup.php';

    $user_id;
    $firstname;
    $lastname;
    $position;
    $error;

    $db_conn = new Database().connection();

    if ($_POST && !isempty($_POST))
    {
        $user_id = $_POST['bbdID'];
        $firstname = $_POST['firstname'];
        $lastname = $_POST['lastname'];
        $position = $_POST['$position'];
        $sql = "INSERT INTO Users(userID, firstName, lastName, position)
                VALUES($user_id, $firstname, $lastname, $position)";
        $db_conn.run_query($sql);
        echo "Added something";
    }
    else {
        $error = "An error occured while processing your request";
    }
 ?>
