<?php

class ProductDB
{

    private PDOstatement $statementReadAll;

    private $pdo;

    function __construct(PDO $pdo)
    {
        $this->statementReadAll = $pdo->prepare('SELECT * FROM products');
    }

    public function fetchAll()
    {
        $this->statementReadAll->execute();
        return $this->statementReadAll->fetchAll();
    }
}

return new ProductDB($pdo);
