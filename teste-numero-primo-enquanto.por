programa {
  funcao inicio() {
    inteiro numeroTest, resto, contador = 1, contPrimo = 0

    escreva("Digite o número para testar se é Primo ou não: \n")
    leia(numeroTest)

    enquanto(contador <= numeroTest){
      resto = numeroTest % contador
      se (resto == 0){
        contPrimo = contPrimo + 1
      }
      contador = contador + 1
    }

    se (contPrimo == 2){
      escreva("O número ",numeroTest," é um número Primo!!!")
    } senao {
      escreva("O número ",numeroTest," não é um número Primo.")
    }

  }
}
