<?php

      include "../../php/conn.php";

      $id_produto = $_POST["id_produto"];
      $quantidade = $_POST["quantidade"];

      $query = "CALL insert_produto_in_carrinho($id_produto, $quantidade)";
      
      mysqli_query($conn, $query);

?>
