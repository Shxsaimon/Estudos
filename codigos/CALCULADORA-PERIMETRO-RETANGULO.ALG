Algoritmo "Calculadora-perimetro-retangulo"
//   Sabendo-se que o perímetro de um retângulo é a soma de seus
//   lados. Faça um algoritmo que informando os lados retorne o
//   perímetro do mesmo.
Var

   lado1, lado2, perimetro: real

Inicio

      escreval("   Cálculadora de Perímetro de Retângulo")
      escreval("---------------------------------------------")
      escreva("Digite o valor do primeiro lado do retângulo: ")
      leia(lado1)
      escreva("Agora o segundo lado: ")
      leia(lado2)
      
      perimetro <- ((lado1*2)+(lado2*2))
      
      escreval("O perímetro do retângulo é:",perimetro)


Fimalgoritmo