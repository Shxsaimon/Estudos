Algoritmo "Conversor-hora-minuoto-segundo"

//  Faça um algoritmo que informando uma hora qualquer retorne
//  quantos minutos e segundos correspondem a hora informada.
Var
   hora, minutosHora, segundosHora: real


Inicio
      escreva("Digite a quantidade de horas para converter:")
      leia(hora)
      minutosHora <- hora * 60
      segundosHora <- hora * 3600
      escreval(hora," horas são:",minutosHora," minutos e, também,",segundosHora," segundos")


Fimalgoritmo