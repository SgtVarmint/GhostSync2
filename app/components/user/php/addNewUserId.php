<?php

$USERNAME  = $_POST['userName'];
$LOBBYNAME = $_POST['lobbyName'];

define('RAND_MIN', 1000000000);
define('RAND_MAX', 9999999999);
define('DATA_FILE_PATH', '/var/www/html/data/lobbies.json');

function generateUserId() : int {
    return rand(RAND_MIN, RAND_MAX);
}

function openJsonFile() : array {
    $jsonString = file_get_contents(DATA_FILE_PATH);
    return json_decode($jsonString, true);
}

function createNewLobbyObj(string $lobby) : array {
    $newLobbyArr = 
        [
            "time_stamp" => "",
            "play_state" => "",
            "file_path" => "",
            "server_time" => "",
            "users" => array()
        ];

    return $newLobbyArr;
}

function createNewUserObj(string $username) : array {
    $userArr = 
        [
            "user_name" => $username,
            "state" => "active",
            "reaction" => "will soon be deprecated",
            "timestamp_current" => "00000",
            "timestamp_last" => "11111"
        ];

    return $userArr;
}

function addNewUserId(string $lobby, string $username) : int {
    $lobbyList = openJsonFile();
    $workingLobby = $lobbyList[$lobby] ?? createNewLobbyObj($lobby);
    $userIdKeys = array_keys($workingLobby['users']);

    do {
        $userId = generateUserId();
    } while(in_array($userId, $userIdKeys));

    $workingLobby['users'][$userId] = createNewUserObj($username);
    $lobbyList[$lobby] = $workingLobby;

    file_put_contents(DATA_FILE_PATH, json_encode($lobbyList));

    return $userId;
}

$userId = addNewUserId($LOBBYNAME, $USERNAME);
echo json_encode(['userId' => $userId]);