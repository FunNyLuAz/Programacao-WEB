<?php

      include "../../php/conn.php";

      $id_produto = $_POST["id_produto"];
      $quantidade = $_POST["quantidade"];

      $query = "UPDATE carrinho SET quantidade = $quantidade WHERE id_produto = $id_produto";
      mysqli_query($conn, $query);

?>
