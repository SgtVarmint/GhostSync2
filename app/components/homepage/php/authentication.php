<?php

$userAccessCode = trim($_POST['accessCode']);

$status = $userAccessCode == getenv('ACCESS_KEY') ? getenv('AUTHENTICATED_CODE') : 'denied';

$return = [
    'status' => $status
];

echo json_encode($return);
