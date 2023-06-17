<?php

require("/var/www/html/Curl/Curl.php");

$json = file_get_contents('php://input');
$json = json_decode($json);

$payload = ['accessCode' => $json->AccessCode];
$url = "localhost:5050/v1/auth?accessCode=" . $json->AccessCode;

$curlObject = new Curl($url);
$status = $curlObject->hitEndpoint();
echo json_encode($status);
