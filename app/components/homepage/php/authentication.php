<?php

define('AUTHENTICATED_CODE', 'gs:YrehJb5njkXW1lm39yiF@');

$accessCode = trim($_POST['accessCode']);

$myfile = fopen('/var/www/html/.acc', 'r') or die('Unable to open file!');
$keyFile = fread($myfile, filesize('/var/www/html/.acc'));
fclose($myfile);

$accessStatus = 'denied';

$keys = explode("\n", $keyFile);

foreach ($keys as $key) {
	if ($accessCode == trim($key))
	{
		$accessStatus = AUTHENTICATED_CODE;
	}
}

$return = [
    'status' => $accessStatus
];

echo json_encode($return);
