getForm("./php/listarProdutos.php", listarProdutos); // Requere os produtos e trata eles para adicionar aos cards
getForm("../php/getNumItens.php", putNumItensInCart); // Requere a quantidade de produtos e coloca no ícone de carrinho


async function listarProdutos(response){
      // Lista os produtos no banco de dados no produtos
      var dbProdutos = await response.json();

      var content = "";
      var numFormatting = {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'};

      for (let i = 0; i < dbProdutos.length; i++) {
            content += '<div class="produto-card" id="produto' + dbProdutos[i].id_produto + '">';
            content += '<div class="produto-card-header">';
            content += '<div class="produto-card-foto"><img src="../../db/'+ dbProdutos[i].img_link +'"></div>';
            content += '</div>';
            content += '<div class="produto-card-body">';
            content += '<div class="produto-card-avaliacao">';
            content += '<div class="produto-card-estrelas back">';
            content += '<div class="produto-card-estrela back"></div>';
            content += '<div class="produto-card-estrela back"></div>';
            content += '<div class="produto-card-estrela back"></div>';
            content += '<div class="produto-card-estrela back"></div>';
            content += '<div class="produto-card-estrela back"></div>';
            content += '</div>';
            content += '<div class="produto-card-estrelas front">';
            content += '<div class="produto-card-estrela front"></div>';
            content += '<div class="produto-card-estrela front"></div>';
            content += '<div class="produto-card-estrela front"></div>';
            content += '<div class="produto-card-estrela front"></div>';
            content += '<div class="produto-card-estrela front"></div>';
            content += '</div>';
            content += '</div>';
            content += '<div class="produto-card-nome"><h3><b>' + dbProdutos[i].nome + '</b></h3></div>';
            content += '<div class="produto-card-precoold"><h3><b>' + parseFloat(dbProdutos[i].precoold).toLocaleString('pt-BR', numFormatting) + '</b></h3></div>';
            content += '<div class="produto-card-preco"><h3><b>' + parseFloat(dbProdutos[i].preco).toLocaleString('pt-BR', numFormatting) + '</b></h3></div>';
            content += '<div class="produto-card-comprar">';
            content += '<div class="produto-card-quantidade">';
            content += '<div class="button quantidade" onclick="updateQuantity(\'produto' + dbProdutos[i].id_produto  + '\', -1)"><h5>-</h5></div>';
            content += '<input type="text" value="0" onkeypress=\'return event.charCode >= 48 && event.charCode <= 57\'/>';
            content += '<div class="button quantidade" onclick="updateQuantity(\'produto' + dbProdutos[i].id_produto  + '\', 1)"><h5>+</h5></div>';
            content += '</div>';
            content += '<div class="produto-card-comprar-button">';
            content += '<div class="button comprar" onclick="buyProduct(' + dbProdutos[i].id_produto + ', \'produto' + dbProdutos[i].id_produto + '\')"><h5>Adicionar ao carinho</h5></div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
      }

      document.getElementById("produtos").insertAdjacentHTML('beforeend', content);

      // Atualiza o tamanho das estrelas dos produtos
      var produtosCards = document.getElementsByClassName('produto-card');
      for (let i = 0; i < produtosCards.length; i++) {
            var starsOfProdutoCard = produtosCards[i].getElementsByClassName('produto-card-estrela front');
            updateSizeStarsOfProductCard(starsOfProdutoCard, parseFloat(dbProdutos[i].avaliacao));
      }
}

async function buyProduct(productIdSql, productIdHtml) {
      // Adiciona ao carrinho um produto
      var productCard = document.getElementById(productIdHtml);
      var quantity = productCard.getElementsByClassName("produto-card-quantidade")[0].getElementsByTagName("input")[0];

      quantity.value = isNaN(quantity.value) ? 0 : parseInt(quantity.value);

      if (quantity.value == 0) {
            alert_msg("Insira uma quantidade maior do que 0", function () {});
      } else {
            document.getElementById("id_produto").value = productIdSql;
            document.getElementById("quantidade").value = quantity.value;

            await postForm("formProduct", "./php/addCarrinho.php", function (response) {});

            alert_msg("Adicionado com sucesso", function () {});
      }

      getForm("../php/getNumItens.php", putNumItensInCart);
}

function updateQuantity(productCardId, delta) {
      // Atualiza a quantidade do produto-card
      var productCard = document.getElementById(productCardId);
      var quantity = productCard.getElementsByClassName("produto-card-quantidade")[0].getElementsByTagName("input")[0];

      if (isNaN(quantity.value) || parseInt(quantity.value) + delta < 0) {
            quantity.value = 0;
      } else {
            quantity.value = parseInt(quantity.value) + delta;
      }
}

function updateSizeStarsOfProductCard(stars, percentage /*0 a 100*/) {
      // Atualiza as estrelas de um produto-card pela porcentagem passada
      var lenghtOfStars = Math.ceil(percentage / 100 * 5);
      
      for (let i = 0; i < stars.length; i++) {
            if (lenghtOfStars > i) {
                  stars[i].style.display = "block";
            } else {
                  stars[i].style.display = "none";
            }
      }
}
