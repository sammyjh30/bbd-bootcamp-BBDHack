<?php
    require_once '../config/setup.php';
    $db_conn = new Database().connection();

    function get_user_info($uid){
        $stmt = $db_conn->prepare("SELECT * FROM Users WHERE UserID=:uid");
		$stmt->bindParam(":uid", $uid, PDO::PARAM_STR);
		$stmt->execute();
		if ($stmt->rowCount() == 1)
		{
            $user = $stmt->fetch(PDO::FETCH_ASSOC);
		    return ($user);
		}else{
            return (null);
        }
    }

    if (isset($_GET[]) && isset($_GET['bbdID'])) {
        $user_id = $_GET['bbdID'];
        $user_data =  get_user_info($user_id);
        echo json_encode($user_data);
    } else {
        echo json_encode("user not found");
    }
 ?>
