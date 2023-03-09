addButtonEnter("button-checkout");
getForm("./php/listarItensCarrinho.php", listarItensCarrinho); // Requere os produtos e trata eles para adicionar aos cards


async function listarItensCarrinho(response){
      // Lista os itens do carrinho no banco de dados no carrinho
      document.getElementById("carrinho").innerHTML = "";
      var dbCarrinho = await response.json();

      if (dbCarrinho != null) {
            var content = "";
            var numFormatting = {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'};

            for (let i = 0; i < dbCarrinho.length; i++) {
                  if (dbCarrinho[i].quantidade > 0) {
                        content += '<div class="produto-card" id="produto' + dbCarrinho[i].id_produto + '">';
                        content += '<div class="produto-card-header">';
                        content += '<div class="produto-card-foto"><img src="../../db/'+ dbCarrinho[i].img_link +'"></div>';
                        content += '</div>';
                        content += '<div class="produto-card-body">';
                        content += '<div class="produto-card-nome"><h3><b>' + dbCarrinho[i].nome + '</b></h3></div>';
                        content += '<div class="produto-card-preco"><h3><b>' + parseFloat(dbCarrinho[i].preco).toLocaleString('pt-BR', numFormatting) + '</b></h3></div>';
                        content += '<div class="produto-card-opcoes">';
                        content += '<div class="produto-card-menu">';
                        content += '<div class="produto-card-quantidade">';
                        content += '<div class="button quantidade" onclick="updateQuantity(' + dbCarrinho[i].id_produto + ', \'produto' + dbCarrinho[i].id_produto  + '\', -1)"><h5>-</h5></div>';
                        content += '<input type="text" value="' + dbCarrinho[i].quantidade + '" onchange="updateQuantity(' + dbCarrinho[i].id_produto + ', \'produto' + dbCarrinho[i].id_produto  + '\', 0)" onkeypress=\'return event.charCode >= 48 && event.charCode <= 57\'/>';
                        content += '<div class="button quantidade" onclick="updateQuantity(' + dbCarrinho[i].id_produto + ', \'produto' + dbCarrinho[i].id_produto  + '\', 1)"><h5>+</h5></div>';
                        content += '</div>';
                        content += '<div class="produto-card-remover"><h5 onclick="removeProduct(' + dbCarrinho[i].id_produto + ', \'produto' + dbCarrinho[i].id_produto + '\')">remover</h5></div>';
                        content += '</div>';
                        content += '</div>';
                        content += '</div>';
                        content += '</div>';
                  }
            }

            document.getElementById("carrinho").insertAdjacentHTML('beforeend', content);
      }

      putMsgOfEmptyCart("carrinho");
}

function putMsgOfEmptyCart(cartId) {
      // Põe a mensagem de carrinho vazio se assim for
      var cart = document.getElementById(cartId);
      var button_checkout = document.getElementsByClassName("carrinho-button checkout")[0];
      
      if (cart.innerHTML == "") {
            cart.innerHTML = '<div class="carrinho-msgvazio"><h5>Seu carrinho está vazio.</h5></div>';
            button_checkout.style.display = "none";
      } else {
            button_checkout.style.display = "flex";
      }
}

function removeProduct(productIdSql, productIdHtml) {
      // Remove o produto do carrinho e apaga do carrinho no banco de dados
      document.getElementById("id_produto").value = productIdSql;
      postForm("formProduct", "./php/deleteCarrinho.php", function (response) {});

      var parent = document.getElementById(productIdHtml).parentElement;
      /* SEM TRANSIÇÃO
      document.getElementById(productIdHtml).remove();
      parent.innerHTML = parent.innerHTML.trim();
      putMsgOfEmptyCart("carrinho");
      */
      document.getElementById(productIdHtml).classList.add("removed");
      document.getElementById(productIdHtml).addEventListener("transitionend",() => {
            document.getElementById(productIdHtml).remove();
            parent.innerHTML = parent.innerHTML.trim();
            putMsgOfEmptyCart("carrinho");
      })
}

function updateQuantity(productIdSql, productIdHtml, delta) {
      // Atualiza a quantidade do produto-card
      var productCard = document.getElementById(productIdHtml);
      var quantity = productCard.getElementsByClassName("produto-card-quantidade")[0].getElementsByTagName("input")[0];

      if (isNaN(quantity.value) || parseInt(quantity.value) + delta < 0) {
            quantity.value = 0;
      } else {
            quantity.value = parseInt(quantity.value) + delta;
      }

      document.getElementById("id_produto").value = productIdSql;
      document.getElementById("quantidade").value = quantity.value;
      if (quantity.value > 0) {
            postForm("formProduct", "./php/updateCarrinho.php", function (response) {});
      } else {
            removeProduct(productIdSql, productIdHtml);
      }
}
