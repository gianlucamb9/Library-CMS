<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

$conn = new mysqli($dbServer, $dbUser, $dbPass,$dbName);
?>