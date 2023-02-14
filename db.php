<?php
$dbhost = "host.com";
$dbuser = "dev_user";
$dbpass = "pass123";
$db = "db_name";
$conn = new mysqli($dbhost, $dbuser, $dbpass, $db) or die("Connect failed: %s\n" . $conn->error);
