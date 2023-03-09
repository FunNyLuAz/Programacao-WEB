async function putNumItensInCart(response) {
      // Coloca o número de itens no ícone do carrinho
      var numItensId = "num-itens";
      var numItens = document.getElementById(numItensId);

      numItens.innerHTML = await response.json();
}
