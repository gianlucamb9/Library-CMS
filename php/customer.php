<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include("./config.php");

if($_SERVER["REQUEST_METHOD"]=="POST") {
    switch($_POST["mode"]){

        case "load-books":
            $dbCon = new mysqli ($dbServer,$dbUser,$dbPass,$dbName);
            if($dbCon->connect_error){
                echo "Connection to DB failed! ".$dbCon->connect_error;
            } else {
                $selectCmd = "SELECT * FROM book_tb";
                $result = $dbCon->query($selectCmd);
                $bList = [];
                if($result->num_rows > 0){
                    while($row = $result->fetch_assoc()){
                        array_push($bList, $row);
                    }
                    echo json_encode($bList);
                } else {
                    echo "No data found!";
                }
                $dbCon->close();
            }
            break;

    }
}

?>