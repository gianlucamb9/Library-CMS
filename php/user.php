<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli($dbServer, $dbUser, $dbPass,$dbName);

if($_SERVER["REQUEST_METHOD"]=="POST"){
    if(isset($_SERVER["PATH_INFO"])){
    switch($_SERVER["PATH_INFO"]){

        case "/addbook":
            break;

        }
    }
}

?>