programa {
  funcao inicio() {
    inteiro numero, verifImpar
    escreva("------------- Verificador de número ímpar/par ------------- \n")
    escreva("Digite um número: ")
    leia(numero)

    verifImpar = (numero % 2)
    se (verifImpar == 1){
      escreva("O número digitado é ÍMPAR!\n")
    } senao {
      escreva("O número digitado é PAR!\n")
    }

  }
}
