programa {
  funcao inicio() {
    real conversao, cotDolar, valor, conversaoDolarReal
    escreva("---------------- Conversor de Moeda ----------------\n")
    escreva("Olá, caso deseje converter dólar para real digite: 1 \n")
    escreva("Se deseja converter real para dólar digite: 2 \n")
    leia(conversao)
    escreva("Digite a cotação atual do dólar: \n")
    leia(cotDolar)

    se (conversao == 1){
      escreva("Digite qual o valor em dólares para converter: \n")
      leia(valor)
      conversaoDolarReal = (valor*cotDolar)
      escreva("$",valor, " convertido para real é R$",conversaoDolarReal)
    }
    senao se (conversao == 2) {
      escreva("Digite qual o valor em reais para converter: \n")
      leia(valor)
      conversaoDolarReal = (valor/cotDolar)
      escreva("R$",valor, " convertido para real é $",conversaoDolarReal)

    }
    senao {
      escreva("Por favor, digite o valor equivalente a uma das alternativas!")
    }
    
  }
}
