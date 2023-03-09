addButtonEnter("button-concluir");
verifyIfNoneOption('forma-pagamento', 'button-concluir');
verifyIfNoneInCart();


function verifyIfCartaoCredito(formCheckoutId) {
      // Verifica se o select está na opção de cartão de crédito e, se sim, mostra os inputs para ele
      var formCheckout = document.getElementById(formCheckoutId);
      var formaPagamento = formCheckout.getElementsByTagName("select")[0];
      var cartaoCreditoTags = formCheckout.getElementsByClassName("checkout-item cartao-credito");

      if (formaPagamento.value == "cartao-credito") {
            for (let i = 0; i < cartaoCreditoTags.length; i++) {
                  cartaoCreditoTags[i].style.display = "block";
            }
      } else {
            for (let i = 0; i < cartaoCreditoTags.length; i++) {
                  cartaoCreditoTags[i].style.display = "none";
            }
      }
}

function verifyIfNoneOption(formaPagamentoId, buttonConcluirId) {
      // Verifica se o select está na opção padrão none e retira o botão
      var formaPagamento = document.getElementById(formaPagamentoId);
      var buttonConcluir = document.getElementById(buttonConcluirId);

      if (formaPagamento.value != "none") {
            buttonConcluir.style.display = "block";
      } else {
            buttonConcluir.style.display = "none";
      }
}

function verifyIfNoneInCart() {
      // Verifica se o carrinho está vazio e, se sim, redireciona para o carrinho
      getForm("../php/getNumItens.php", async function (response) {
            var resposta = await response.json();
            if (resposta <= 0) {
                  window.location.href = "../carrinho";
            }
      });
}

function concluirCompra(formCheckoutId) {
      // Conclui a compra com o passado no form
      postForm(formCheckoutId, "./php/concluirCompra.php", confirmarCompra);
}

async function confirmarCompra(response) {
      // Confirma se a compra foi bem-sucedida e redireciona para o main
      var resposta = await response.json();
      if (resposta == 1) {
            alert_msg("Compra efetuada com sucesso", function () {
                  window.location.href = "../main";
            });
      } else {
            alert_msg("Erro ao fazer compra", function () {
                  window.location.href = "../main";
            });
      }
}
