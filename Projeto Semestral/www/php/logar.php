<?php

      include "conn.php";

      $email = $_POST["email"];
      $senha = $_POST["senha"];

      $query = "SELECT EXISTS(SELECT * FROM usuario WHERE email = '$email' AND senha = '$senha') AS 'isUserValid'";
      $registros = mysqli_query($conn, $query);

      $registro = mysqli_fetch_assoc($registros)['isUserValid'];

      if ($registro == "0") {
            $response = FALSE;
      } else {
            $response = TRUE;
      }
      
      $objetoJSON = json_encode($response);
      echo $objetoJSON;

?>
