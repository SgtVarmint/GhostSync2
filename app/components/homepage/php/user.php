<?php

$userName = $_POST['username'];

define('RAND_MIN', 1000000000);
define('RAND_MAX', 9999999999);
define('DATA_FILE_PATH', '/var/www/html/data/userIdList.json');

function generateUserId() : int 
{
    return rand(RAND_MIN, RAND_MAX);
}

function addNewUserId(string $username) : int 
{
    $jsonString = file_get_contents(DATA_FILE_PATH);
    $userIdList = json_decode($jsonString, true);
    $userIds = array_keys($userIdList);

    do {
        $userId = generateUserId();
    } while(in_array($userId, $userIds));

    $userIdList[$userId] = $username;
    file_put_contents(DATA_FILE_PATH, json_encode($userIdList));
    
    return $userId;
}

$userId = addNewUserId($userName);
echo json_encode(['userId' => $userId]);