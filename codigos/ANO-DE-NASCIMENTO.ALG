Algoritmo "Ano-de-nascimento"
//  Faça um algoritmo que a partir do ano de nascimento informado pelo
//  usuário, obtenha como resultado a idade desta pessoa em relação a 1996
Var
    anoNascimento, resultadoComparacao: inteiro
    
Inicio
      escreval("Digite o seu ano de nascimento: ")
      leia(anoNascimento)
      resultadoComparacao <- anoNascimento - 1996
      escreval("Em relação a 1996, a diferença de idade é de", resultadoComparacao," anos")

Fimalgoritmo