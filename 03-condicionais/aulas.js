/*Operadores
 * >
 * <
 * >=
 * <=
 * == '2' == 2 => true
 * === '2' === 2 => false
 * !=
 *
 * if (condicao){
 *  codigo a ser executado se condicao for verdadeira
 * }
 * else {
 *  codigo a ser executado se condicao for falsa
 * }
 */

// function faseDaVida(idade){
//   if (idade<18){
//     return 'Adolescente'
//   }
//   else if (idade < 60){
//     return 'Adulto'
//   }
//   else{
//     return 'Idoso'
//   }
// }


// Cachorro, Passaro e Morcego, Tartaruga
// Mamifero e sabe voar

//Saldo e inadimplente
//Libera saque em duas ocasiões
//1- Saldo negativo e não inadimplente
//2- Saldo positivo

// function animal(mamifero, voar){
//   if(mamifero && voar){
//     return 'morcego'
//   } else if (mamifero && !voar){
//     return 'morcego'
//   } else if (!mamifero && !voar){
//     return 'tartaruga'
//   } else {
//     return 'passaro'
//   }

let chamada = 3

function teste(){
  switch(chamada){
    case 1:
      return 'um'
    case 2:
      return 'dois'
    case 3:
      return 'tres'
    default:
      return "So sei contar ate 3"
  }
}

console.log(teste())