getForm("../php/getNumItens.php", putNumItensInCart); // Requere a quantidade de produtos e coloca no ícone de carrinho
getForm("./php/listarComentarios.php", listarComentarios); // Lista os comentários


async function listarComentarios(response) {
      // Lista os comentarios no banco de dados nas avaliacoes
      var dbComentarios = await response.json();

      var content = "";

      for (let i = 0; i < dbComentarios.length; i++) {
            content += '<div class="avaliacao-card">';
            content += '<div class="avaliacao-card-header">';
            content += '<div class="avaliacao-card-foto"><img src="../../db/' + dbComentarios[i].img_link + '"></div>';
            content += '</div>';
            content += '<div class="avaliacao-card-body">';
            content += '<div class="avaliacao-card-info">';
            content += '<h3><b>' + dbComentarios[i].nome + '</b><br><i>' + dbComentarios[i].cidade + ', ' + dbComentarios[i].uf + '</i></h3>';
            content += '</div>';
            content += '<div class="avaliacao-card-texto">';
            content += '<h3><b>"' + dbComentarios[i].comentario + '"</b></h3>';
            content += '</div>';
            content += '</div>';
            content += '</div>';
      }

      document.getElementById("avaliacoes").insertAdjacentHTML('beforeend', content);
}
