<?php

require __DIR__ . '/database/connexion.php';

$productsDB = require_once __DIR__ . '/./database/models/products.php';

$products = $productsDB->fetchAll();

$infos = json_encode($products);

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <?php include_once './includes/head.php' ?>
    <title>Infinity Ligne | Accueil</title>
    <link rel="stylesheet" href="/public/css/index.css">
</head>

<body>
    <?php include_once './includes/footerJs.php' ?>
</body>

</html>