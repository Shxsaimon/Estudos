programa {
  funcao inicio() {
    inteiro valor1, valor2, resto

    escreva("Olá, digite dois valores para verificar se são MULTIPLOS entre si!\n")
    escreva("Digite o primeiro valor: ")
    leia(valor1)
    escreva("Digite o segundo valor: ")
    leia(valor2)

    se(valor1 > valor2){
      resto = valor1 % valor2
      se (resto == 0){
        escreva("O número ",valor1," é múltiplo de ",valor2,"!")
      } senao{ 
      escreva("O número ",valor1," não é múltiplo de ",valor2,".")
      }
    }
    se(valor1 < valor2){
      resto = valor2 % valor1
      se (resto == 0){
        escreva("O número ",valor2," é múltiplo de ",valor1,"!")
      } senao{ 
      escreva("O número ",valor2," não é múltiplo de ",valor1,".")
      }
    }
    }
  }
  /* Programa aceitando apenas que o primeiro valor seja maior que o segundo
    escreva("Olá, digite dois valores para verificar se são MULTIPLOS entre si!\n")
    escreva("Observação: o primeiro valor *precisa* ser maior que o segundo.\n")
    escreva("Digite o primeiro valor: ")
    leia(valor1)
    escreva("Digite o segundo valor: ")
    leia(valor2)
    enquanto(valor1 < valor2){
      escreva("O segundo valor não pode ser maior que o primeiro. Por favor, digite outro valor: ")
      leia(valor2)
    }
    resto = valor1 % valor2

    se(resto == 0){
      escreva("O número ",valor1," é múltiplo de ",valor2,"!")
    } senao{ 
      escreva("O número ",valor1," não é múltiplo de ",valor2,".")
    }
  } */

