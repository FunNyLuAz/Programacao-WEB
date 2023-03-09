<?php

      include "../../php/conn.php";

      $id_produto = $_POST["id_produto"];

      $query = "DELETE FROM carrinho WHERE id_produto = $id_produto";
      mysqli_query($conn, $query);

?>
