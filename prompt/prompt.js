 
// var prompt = require('prompt-sync')();
// const nome = prompt('nome')

// console.log("Oia os", nome)


let lista = []

function addNaPosicao(indice, valor){
  if(lista[indice] === undefined){
    lista[indice] = valor
  }
}