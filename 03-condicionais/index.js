function exercise1(){
  const name = document.querySelector('#ex1name').value
  const result = souEu(name) ? 'Verdadeiro' : 'Falso'
  document.querySelector('#ex1resp').innerHTML = result
}

function exercise2(){
  const idade = Number(document.querySelector('#ex2input').value)
  const name = chamada(idade)
  document.querySelector('#ex2resp').innerHTML = name

}

function exercise3(){
  const idade = Number(document.querySelector('#ex3input').value)
  const acompanhado = Boolean(document.querySelector('#ex3radio').checked)
  const result = podeEntrar(idade, acompanhado)
  document.querySelector('#ex3resp').innerHTML = result
}

function exercise4(){
  const nota = Number(document.querySelector('#ex4input').value)
  const result = passouDeAno(nota)
  document.querySelector('#ex4resp').innerHTML = result
}

function exercise5(){
  const user = document.querySelector('#ex5user').value
  const password = document.querySelector('#ex5password').value
  const result = login(user,password) ? 'Verdadeiro' : 'Falso'
  document.querySelector('#ex5resp').innerHTML = result
}

function exercise6(){
  const fds = Boolean(document.querySelector('#ex6check').checked)
  const hora = Number(document.querySelector('#ex6input').value)
  const result = aberto(fds, hora) ? 'Aberto' : 'Fechado'
  document.querySelector('#ex6resp').innerHTML = result
}

function exercise7(){
  const positivo = Boolean(document.querySelector('#ex7checkA').checked)
  const inadimplente = Boolean(document.querySelector('#ex7checkB').checked)
  const result = saque(positivo, inadimplente) ? 'Pode Sacar' : 'Não pode sacar'
  document.querySelector('#ex7resp').innerHTML = result
}

function exercise8(){
  const mamifero = Boolean(document.querySelector('#ex8checkA').checked)
  const voar = Boolean(document.querySelector('#ex8checkB').checked)
  const result = animal(mamifero, voar)
  document.querySelector('#ex8resp').innerHTML = result
}