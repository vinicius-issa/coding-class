function souEu(name){
  return name === 'vinicius'
}

function chamada(numero){
  switch(numero){
    case 1: return 'João'
    case 2: return 'Maria'
    case 3: return 'Joana'
    case 4: return 'Carlos'
    default: return 'Não Encontrado'
  }
}

function podeEntrar(idade, acompanhado){
  return acompanhado || idade >=18
}

function passouDeAno(nota){
  if(nota<4) return 'Reprovado'
  else if(nota < 7) return 'Em recuperação'
  else return 'Aprovado'
}

function login(user, senha){
  return user==='admin' && senha==='123456'
}

function aberto(finalDeSemana, hora){
  console.log(typeof hora)
  if(finalDeSemana){
    console.log(hora)
    return hora>=9 && hora<=18
  } else {
    return hora>=8 && hora<=17
  }
}

function saque(positivo, inadimplente){
  return !inadimplente || positivo
}

function animal(mamifero, voar){
  if(mamifero && voar) return 'morcego'
  else if(!mamifero && voar) return 'passaro'
  else if(!mamifero && !voar) return 'tartaruga'
  else return 'cachorro'
}