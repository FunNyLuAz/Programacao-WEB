<?php

      include "../../php/conn.php";

      $nome = $_POST["nome"];
      $data_nasc = $_POST["data_nasc"];
      $cpf = $_POST["cpf"];
      $sexo = $_POST["sexo"];
      $email = $_POST["email"];
      $telefone = $_POST["telefone"];
      $senha = $_POST["senha"];

      $query = "INSERT INTO usuario VALUES (NULL, '$nome', '$data_nasc', '$cpf', '$sexo', '$email', '$telefone', '$senha')";
      $registros = mysqli_query($conn, $query);

      if (!$registros) {
            $response = FALSE;
      } else {
            $response = TRUE;
      }

      $objetoJSON = json_encode($response);
      echo $objetoJSON;

?>
