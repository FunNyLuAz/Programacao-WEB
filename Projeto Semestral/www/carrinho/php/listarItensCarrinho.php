<?php

      include "../../php/conn.php";


      // Impede o cache da informação
      header("Cache-Control: no-cache, no-store, must-revalidate"); // HTTP 1.1.
      header("Pragma: no-cache"); // HTTP 1.0.
      header("Expires: 0"); // Proxies.
      

      $query = "SELECT p.id_produto, p.nome, p.preco, p.img_link, quantidade FROM carrinho c LEFT JOIN produto p ON p.id_produto = c.id_produto";
      $registros = mysqli_query($conn, $query);

      $resposta = NULL;
      $i = 0;

      while($registro = mysqli_fetch_assoc($registros)){
            $resposta[$i]["id_produto"] = $registro["id_produto"];
            $resposta[$i]["nome"] = $registro["nome"];
            $resposta[$i]["preco"] = $registro["preco"];
            $resposta[$i]["img_link"] = $registro["img_link"];
            $resposta[$i]["quantidade"] = $registro["quantidade"];

            $i++;
      }

      $objetoJSON = json_encode($resposta);
      echo $objetoJSON;  

?>
