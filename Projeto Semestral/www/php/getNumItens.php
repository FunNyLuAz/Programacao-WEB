<?php

      include "../php/conn.php";


      // Impede o cache da informação
      header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
      header("Pragma: no-cache"); // HTTP 1.0.
      header("Expires: 0"); // Proxies.

      
      $query = "SELECT COALESCE(SUM(quantidade), 0) AS quantidade FROM carrinho";
      $registros = mysqli_query($conn, $query);

      $resposta = mysqli_fetch_assoc($registros)["quantidade"];

      $objetoJSON = json_encode($resposta);
      echo $objetoJSON;  

?>
