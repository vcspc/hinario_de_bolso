
import {l1, l2, l3, l4, l5, l6, l7, l8, l9, l10} from './hinos.js'

const hinos = [
    { numero: 1, nome: "Santo, Santo, Santo"       , letra:  l1},
    { numero: 2, nome: "Ó Adorai o Senhor"         , letra:  l2},
    { numero: 3, nome: "O Deus Eterno Reina"       , letra:  l3},
    { numero: 4, nome: "Louvor ao Trino Deus"      , letra:  l4},
    { numero: 5, nome: "Jubilosos Te Adoramos"     , letra:  l5},
    { numero: 6, nome: "Nós Te Adoramos"           , letra:  l6},
    { numero: 7, nome: "Sejas Louvado"             , letra:  l7},
    { numero: 8, nome: "Ó Deus de Amor"            , letra:  l8},
    { numero: 9, nome: "Santo, Santo, Pai Bondoso" , letra:  l9},
    { numero: 10, nome: "O Senhor Está Aqui"       , letra:  l10}
];

//Função de busca de dados//

/*function buscarHinos(termoDeBusca) {

    const resultados = [];

    hinos.forEach(function(hino)  {
        if (hino.nome.toLowerCase().includes(termoDeBusca.toLowerCase())) {
            resultados.push(hino);  
        }
    });

    return resultados;
}*/

/*function atualizarListaDeItens(termoDeBusca) {
    const resultados = hinos.filter(function(hino) {
      return hino.nome.toLowerCase().includes(termoDeBusca.toLowerCase());
    });
    
    const lista = document.getElementsByClassName("lista");
    lista.innerHTML = "";
    
    resultados.forEach(function(hino) {
      const li = document.createElement("li");
      li.textContent = `${hino.nome}`;
      lista.appendChild(li);
    });
  }
  

  const barraDeBusca = document.getElementById("input-busca");
barraDeBusca.addEventListener("input", function(evento) {
  atualizarListaDeItens(evento.target.value);
});*/



