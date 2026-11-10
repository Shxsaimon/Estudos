Algoritmo "Dias-Vividos"

//  Faça um algoritmo que leia o nome e a idade de uma pessoal.
//  Determine quantos dias aproximadamente esta pessoa já viveu.
//  Escreva o nome da pessoa e o número de dias vividos
Var
   nome: caractere
   idade: inteiro
   diasVivido: real
Inicio
      escreva("Olá, digite seu nome: ")
      leia(nome)
      escreva("Olá ",nome, ", digite sua idade: ")
      leia(idade)
      diasVivido <- idade*365.25
      escreva(nome, ", essa é a quantidade de dias que você já viveu:",diasVivido, " dias!")


Fimalgoritmo