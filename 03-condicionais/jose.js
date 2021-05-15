function souEu(nome){
  if (nome === 'vinicius')
    return true
  else
    return false
}

function chamada(numero){
  // if (numero === 1){
  //   return ('João')
  // }
  // else if (numero === 2){
  //   return ('Maria')
  // }
  // else if (numero === 3){
  //   return ('joana')
  // }
  // else if (numero === 4){
  //   return ('Carlos')
  // }
  // else{
  //   return ('nao encontrado')
  // }

  switch(numero){
    case 1:
     return "João"
    case 2:
      return "Maria"
    case 3:
      return "Joana"
    case 4:
      return "Carlos"
    default:
      return "nao encontrado"
  }
}

function podeEntrar(idade, acompanhado){
  if (idade >= 18){
    return 'pode entrar'
  }
  else if( acompanhado ){
    return 'pode entrar'
  }
  else{
    return 'nao pode entrar'
  }
}

function passouDeAno(nota){
  if (nota < 4){
    return 'reprovado'
  }
  else if (nota>=4 && nota < 7){
    return 'recuperaçao'
  }
  else{
    return 'aprovado'
  }
}

function login(usuario, senha){
  return (usuario === "admin" && senha === "123456")
}

function aberto(fds, hora){
  return (fds && hora>=8 && hora<=17) || (!fds && hora>=9 && hora<=18)
}

function saque(saldo, inadimplente){
  return (saldo) || (!saldo && !inadimplente)
}

function animal(mamifero, voar){
  if (mamifero && voar)
  return "morcego"
  else if (mamifero)
  return "cachorro"
  else if (voar)
  return "passaro"
  else
  return "tartaruga"
}