<?php

      include "../../php/conn.php";

      $cpf = $_POST["cpf"];

      $query = "SELECT EXISTS(SELECT * FROM usuario WHERE cpf = '$cpf') AS 'isCpfValid'";
      $registros = mysqli_query($conn, $query);

      $registro = mysqli_fetch_assoc($registros)['isCpfValid'];

      if ($registro == "0") {
            $response = TRUE;
      } else {
            $response = FALSE;
      }
      
      $objetoJSON = json_encode($response);
      echo $objetoJSON;

?>
