<?php

      include "../../php/conn.php";

      $email = $_POST["email"];

      $query = "SELECT EXISTS(SELECT * FROM usuario WHERE email = '$email') AS 'isEmailValid'";
      $registros = mysqli_query($conn, $query);

      $registro = mysqli_fetch_assoc($registros)['isEmailValid'];

      if ($registro == "0") {
            $response = TRUE;
      } else {
            $response = FALSE;
      }
      
      $objetoJSON = json_encode($response);
      echo $objetoJSON;

?>
