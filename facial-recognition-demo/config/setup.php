<?php
    require_once "./database.php";

class Database
{
    private $DB_DSN = $host;
    private $DB_NAME = $db_name;
    private $DB_USER = $username;
    private $DB_PASSWORD = $password;

    private $conn = null;

    // creates database connection and returns it.
    public function connection()
	{
        try
		{
            $this->conn = new PDO($this->DB_DSN . ";dbname=" . $this->DB_NAME,
                                    $this->DB_USER, $this->DB_PASSWORD);
			$this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }
		catch(PDOException $exception)
		{
            echo "Connection error: " . $exception->getMessage();
        }
        return $this->conn;
    }

    public function create_database()
    {
        try
        {
           $this->conn->exec("CREATE DATABASE IF NOT EXISTS $this->$DB_NAME");
            echo("Database succefully created");
        }
        catch(PDOException $ex)
        {
            echo("ERROR: ". $ex->getMessage());
        }
    }

    public function run_query($query)
    {
        $this->conn->exec($query);
    }
}
?>
