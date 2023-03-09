addButtonEnter("button-logar");

// Adiciona eventos para mostrar como inválidos
var inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
      let myFunc = function (event) {
            verifyInvalidInput(event.target.id);
      };
      inputs[i].getElementsByTagName("input")[0].addEventListener("focus", myFunc);
      inputs[i].getElementsByTagName("input")[0].addEventListener("change", myFunc);
}


function logar(formLoginId) {
      // Realiza o login do usuário
      let inputs = document.getElementById(formLoginId).getElementsByClassName("input");
      for (let i = 0; i < inputs.length; i++) {
            verifyInvalidInput(inputs[i].getElementsByTagName("input")[0].id);
      }
      
      if (!checkAnyInvalidInForm(formLoginId)) {
            postForm(formLoginId, "./php/logar.php", verifyLogin);
      } else {
            alert_msg("Campos inválidos e/ou incompletos", function () {});
      }
}

async function verifyLogin(response) {
      // Verifica se o login foi bem-sucedido
      var isUserValid = await response.json();
      
      if (isUserValid) {
            window.location.href = "./main";
      } else {
            alert_msg("E-mail e/ou senha inválidos", function () {});
      }
      
      verifyIfInputIsBlank('email');
}
