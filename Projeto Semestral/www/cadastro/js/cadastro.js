addButtonEnter("button-cadastrar");

// Adiciona eventos para mostrar como inválidos
var inputs = document.getElementsByClassName("input");
for (let i = 0; i < inputs.length; i++) {
      let myFunc = function (event) {
            verifyInvalidInput(event.target.id);
      };
      inputs[i].getElementsByTagName("input")[0].addEventListener("focus", myFunc);
      inputs[i].getElementsByTagName("input")[0].addEventListener("change", myFunc);
}


async function cadastrar(formCadastroId) {
      // Efetua o cadastro com o passado no form
      let inputs = document.getElementById(formCadastroId).getElementsByClassName("input");
      for (let i = 0; i < inputs.length; i++) {
            verifyInvalidInput(inputs[i].getElementsByTagName("input")[0].id);
      }
      verifyInvalidRadio("sexo");

      var checkPasswords = checkEqualPasswordsValues("senha", "confirmar-senha");
      var checkInputs = !checkAnyInvalidInForm(formCadastroId);

      var checkCpf;
      await postForm(formCadastroId, "./php/verificarCpf.php", async function (response) {
            var resposta = await response.json();
            checkCpf = resposta;
      });

      var checkEmail;
      await postForm(formCadastroId, "./php/verificarEmail.php", async function (response) {
            var resposta = await response.json();
            checkEmail = resposta;
      });

      if (checkPasswords && checkInputs && checkCpf && checkEmail) {
            postForm(formCadastroId, "./php/cadastrar.php", verifyCadastro);
      } else if (!checkInputs) {
            alert_msg("Campos inválidos e/ou incompletos", function () {});
      } else if (!checkPasswords) {
            alert_msg("Senhas não estão iguais", function () {});
      } else if (!checkCpf) {
            alert_msg("CPF já cadastrado", function () {});
      } else if (!checkEmail) {
            alert_msg("E-mail já cadastrado", function () {});
      }
}

async function verifyCadastro() {
      // Verifica se o cadastro foi bem-sucedido e, se sim, redireciona para o login
      var isCadastrado = await response.json();
      
      if (isCadastrado) {
            alert_msg("Foi cadastrado com sucesso", function () {
                  window.location.href = "../";
            });
      } else {
            alert_msg("Erro no cadastro", function () {});
      }
      
      verifyIfInputIsBlank('email');
}

function checkEqualPasswordsValues(passwordId, confirmPasswordId) {
      // Verifica se o campo de senha e de confirmar senha estão iguais
      var password = document.getElementById(passwordId);
      var confirmPasswordId = document.getElementById(confirmPasswordId);

      if (password.value == confirmPasswordId.value) {
            return true;
      } else {
            return false;
      }
}
