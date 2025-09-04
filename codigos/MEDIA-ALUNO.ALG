Algoritmo "Media-Aluno"
// Faça um algoritmo que o usuário digite um nome de um aluno e
// suas quatro notas bimestrais e obtenha como resultado o nome e
// a média aritmética do aluno
Var
   aluno: caractere
   nota1, nota2, nota3, nota4: real
   media: real

Inicio
      escreva("Digite o nome do aluno: ")
      leia(aluno)
      escreva("Agora, digite a primeira nota: ")
      leia(nota1)
      escreva("Digite a segunda nota: ")
      leia(nota2)
      escreva("Digite a terceira nota: ")
      leia(nota3)
      escreva("Digite a quarta nota: ")
      leia(nota4)
      
      media <- (nota1 + nota2 + nota3 + nota4)/4
      
      escreval("O aluno ", aluno, " está com a média", media, " nesse bimestre.")
Fimalgoritmo