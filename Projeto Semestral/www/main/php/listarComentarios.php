<?php

      include "../../php/conn.php";

      $query = "SELECT * FROM comentario ORDER BY RAND() LIMIT 3";
      $registros = mysqli_query($conn, $query);

      $i = 0;

      while($registro = mysqli_fetch_assoc($registros)){
            $resposta[$i]["id_comentario"] = $registro["id_comentario"];
            $resposta[$i]["nome"] = $registro["nome"];
            $resposta[$i]["cidade"] = $registro["cidade"];
            $resposta[$i]["uf"] = $registro["uf"];
            $resposta[$i]["comentario"] = $registro["comentario"];
            $resposta[$i]["img_link"] = $registro["img_link"];

            $i++;
      }

      $objetoJSON = json_encode($resposta);
      echo $objetoJSON;

?>
