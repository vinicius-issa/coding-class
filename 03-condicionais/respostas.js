function podeEntrar(idade, acompanhado){
  if(idade >= 18){
    return true
  } else {
    if(acompanhado === true){
      return true
    } else{
      return false
    }
  }
}

function passouDeAno(nota){
  if(nota<4){
    return "Reprovado"
  } else if (nota>=4 && nota<7)  {
    return "Em recuperação"
  } else {
    return "Aprovado"
  }
}

function login(usuario, senha) {
  if(usuario==='admin' && senha==='123456'){
    return true
  } else {
    return false
  }
}