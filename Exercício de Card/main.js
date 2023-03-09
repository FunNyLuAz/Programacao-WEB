const ADRSS_IMGS = "img";
const ID_PRFX_PRODUTOS = "prd_"
const MOEDA = "R$"

var produtos = [
      {
            "reg": "banana",
            "img": "banana.png",
            "nome": "Banana",
            "preco": 9.90,
            "descricao": "Banana importada do Afeganistão."
      },
      {
            "reg": "maca",
            "img": "maca.png",
            "nome": "Maçã",
            "preco": 8.70,
            "descricao": "Maçã importada da Argentina."
      },
      {
            "reg": "uva",
            "img": "uva.png",
            "nome": "Uva",
            "preco": 6.50,
            "descricao": "Uva importada do Paraguai."
      },
      {
            "reg": "pessego",
            "img": "pessego.png",
            "nome": "Pêssego",
            "preco": 19.90,
            "descricao": "Pêssego importado do Tibeti."
      },
      {
            "reg": "melancia",
            "img": "melancia.png",
            "nome": "Melância",
            "preco": 10.90,
            "descricao": "Melância importada do Peru."
      },
      {
            "reg": "melao",
            "img": "melao.png",
            "nome": "Melão",
            "preco": 8.30,
            "descricao": "Melão importado da Albânia."
      },
      {
            "reg": "kiwi",
            "img": "kiwi.png",
            "nome": "Kiwi",
            "preco": 5.40,
            "descricao": "Kiwi importado da Jordânia."
      },
      {
            "reg": "abacaxi",
            "img": "abacaxi.png",
            "nome": "Abacaxi",
            "preco": 15.40,
            "descricao": "Abacaxi nacional de Jurupema."
      }
];

// Monta um array com os registros de todos os produtos
var regs = [];
for (let i = 0; i < produtos.length; i++)
      regs.push(produtos[i].reg);
//

// Monta os CARDS
cards_produtos = "";
for (let i = 0; i < produtos.length; i++) {
      let card = "";
      card += '<div class="card">';
      card += '<div class="card-img"><img class="img" src="' + ADRSS_IMGS + '/' + produtos[i].img + '" alt="img/missing.png"></div>';
      card += '<div class="card-nome">' + produtos[i].nome.toUpperCase() + '</div>';
      card += '<div class="card-preco">' + MOEDA + produtos[i].preco.toFixed(2).toString().replace(".", ",") + '</div>';
      card += '<div class="card-comprar" onclick="printDescricao(this.id)" id="' + ID_PRFX_PRODUTOS + produtos[i].reg + '">COMPRAR</div>';
      card += '</div>';
      
      cards_produtos += card;
}
document.getElementById("produtos").innerHTML = cards_produtos;
//

function printDescricao(id) {
      let index;
      for (let i = 0; i < regs.length; i++)
            if (id == ID_PRFX_PRODUTOS + regs[i])
                  index = i;
      alert(produtos[index].descricao);
}
