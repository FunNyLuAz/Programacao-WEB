<?php

      include "../../php/conn.php";

      $forma_pagamento = $_POST["forma_pagamento"];
      
      $numero_cartao = "";
      $nome_proprietario = "";
      $data_vencimento_mes = "";
      $data_vencimento_ano = "";
      $cvv = "";

      if ($forma_pagamento == "cartao-credito") {
            $forma_pagamento = 1;

            $numero_cartao = $_POST["numero_cartao"];
            $nome_proprietario = $_POST["nome_proprietario"];
            $data_vencimento = explode('-', $_POST["data_vencimento"]);
            $data_vencimento_mes = $data_vencimento[1];
            $data_vencimento_ano = $data_vencimento[0];
            $cvv = $_POST["cvv"];

      } else if ($forma_pagamento == "pix") {
            $forma_pagamento = 2;
      }

      $query = "CALL insert_compra($forma_pagamento, '$numero_cartao', '$nome_proprietario', '$data_vencimento_mes', '$data_vencimento_ano', '$cvv')";
      $registros = mysqli_query($conn, $query);
      
      $resposta = mysqli_fetch_assoc($registros)["resposta"];

      $objetoJSON = json_encode($resposta);
      echo $objetoJSON;  

?>
