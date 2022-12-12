<?php

$dns = 'mysql:host=localhost;dbname=infinity_ligne';
$user = 'root';
$psw = '';

try {
    $pdo = new PDO($dns, $user, $psw, [
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
    ]);
} catch (PDOException $e) {
    echo 'error : ' . $e->getMessage();
}

return $pdo;
