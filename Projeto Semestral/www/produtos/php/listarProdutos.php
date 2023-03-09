<?php

      include "../../php/conn.php";

      $query = "SELECT * FROM produto";
      $registros = mysqli_query($conn, $query);

      $i = 0;

      while($registro = mysqli_fetch_assoc($registros)){
            $resposta[$i]["id_produto"] = $registro["id_produto"];
            $resposta[$i]["nome"] = $registro["nome"];
            $resposta[$i]["preco"] = $registro["preco"];
            $resposta[$i]["precoold"] = $registro["precoold"];
            $resposta[$i]["avaliacao"] = $registro["avaliacao"];
            $resposta[$i]["img_link"] = $registro["img_link"];

            $i++;
      }

      $objetoJSON = json_encode($resposta);
      echo $objetoJSON;  

?>
