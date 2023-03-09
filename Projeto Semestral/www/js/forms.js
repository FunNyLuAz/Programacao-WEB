async function postForm(formId, phpPathName, threatResponse) {
      // Envia um formulário com o método POST e trata o recebido
      var dataForm = new FormData(document.getElementById(formId));

      response = await fetch(phpPathName, {
            method: "POST",
            body: dataForm
      });

      await threatResponse(response);
}

async function getForm(phpPathName, threatResponse) {
      // Envia um formulário com o método GET e trata o recebido
      response = await fetch(phpPathName, {
            method: "GET"
      });

      await threatResponse(response);
}

function verifyIfInputIsBlank(inputId) {
      // Verifica se um Input tem valor vazio e adiciona uma subclass de notblank se sim
      var input = document.getElementById(inputId);

      if (input.value == "") {
            input.parentNode.classList.remove("notblank");
      } else {
            input.parentNode.classList.add("notblank");
      }
}

function checkAnyInvalidInForm(formCadastroId) {
      // Verifica se há ou não algum inválido no form passado
      if (document.getElementById(formCadastroId).getElementsByClassName("disabled").length <= 0) {
            return false;
      } else {
            return true;
      }
}

function verifyInvalidInput(inputId) {
      // Verifica se o input está inválido e aplica a classe adequada ou a remove
      var input = document.getElementById(inputId);

      if (checkInputValue(input)) {
            input.parentNode.classList.remove("disabled");
      } else {
            input.parentNode.classList.add("disabled");
      }
}

function verifyInvalidRadio(checkoptionId) {
      // Verifica se o radio está inválido e aplica a classe adequada ou a remove
      var checkoption = document.getElementById(checkoptionId);

      if (checkRadioValues(checkoptionId)) {
            checkoption.classList.remove("disabled");
      } else {
            checkoption.classList.add("disabled");
      }
}

function checkInputValue(input) {
      // Verifica o input e valida
      var email_format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      
      if (input.value == "") {
            return false;
      }
      if (input.type == "email") {
            let count = input.value.split('@').length;
            count += input.value.split('.').length;
            if (!(count >= 4 && email_format.test(input.value))) {
                  return false;
            }
      }
      return true;
}

function checkRadioValues(checkoptionId) {
      // Verifica o radio e valida se ele está marcado
      var radios = document.getElementById(checkoptionId).getElementsByTagName("input");

      for (let i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                  return true;
            }
      }
      return false;
}
