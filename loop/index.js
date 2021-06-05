// let list = [];
// let number;
// do {
//   number = Number(prompt(`
//     1- adicionar usuario
//     2- mostrar lista
//     3- sair
//   `));
//   if ((number === 1)) {
//     let newUser = prompt("digite o nome do novo usuario")
//     list.push(newUser)
//   } else if ((number === 2)) {
//     let index=0
//     // do {
//     //   console.log(list[index])
//     //   index++
//     // } while (index<list.length);

//     // for(let i = 0; i<list.length ;i++){
//     //   console.log(list[i])
//     // }


//     list.forEach( function(name){
//       console.log(name)
//     } )

//   } else if ((number === 3)) {
//     console.log("saindo do sistema");
//   } else {
//     console.log("opçao invalida");
//   }
// } while (number !== 3);

let list = [ 1, 2, 3, 4 ,5, 6]

let listDouble = list.map( function(elem){
  return elem + 2
} )


console.log(list)