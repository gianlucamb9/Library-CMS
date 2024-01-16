<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
include("./config.php");

$dbCon = new mysqli($dbServer, $dbUser, $dbPass,$dbName);

if($_SERVER["REQUEST_METHOD"]=="POST") {
    switch($_POST["mode"]){

        case "load-books":
            $dbCon = new mysqli ($dbServer,$dbUser,$dbPass,$dbName);
            if($dbCon->connect_error){
                echo "Connection to DB failed! ".$dbCon->connect_error;
            } else {
                $selectCmd = "SELECT * FROM book_tb";
                $result = $dbCon->query($selectCmd);
                if($result->num_rows > 0){
                    $plist = [];
                    while($product = $result->fetch_assoc()){
                        array_push($plist, $product);
                    }
                    echo json_encode($plist);
                } else {
                    echo "No data found!";
                }
            }
            break;

    }
}

?>