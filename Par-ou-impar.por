programa {
  inclua biblioteca Util

  funcao inicio() {
    inteiro numeroSorteado, numeroUser, somaNumeros
    caracter escolhaUser

    numeroSorteado = Util.sorteia(0,10)

    escreva("Olá, vamos jogar par ou ímpar com a máquina?\n")
    escreva("Digite P para ser par ou I para ser impar:\n")
    leia(escolhaUser)
    se(escolhaUser == "P"){
      escreva("Boa sorte, você escolheu par!\n")
    } senao se(escolhaUser == "I"){
      escreva("Boa sorte, você escolheu impar!\n")
    }
    senao {
      escreva("Por favor, escolha entre P para par e I para impar \n")
      leia(escolhaUser)
    }
  
    escreva("Digite um número entre 0 e 10: \n")
    leia(numeroUser)
    se (numeroUser < 0 e numeroUser > 10){
      escreva("Por favor, digite um número entre 1 e 10\n")
      leia(numeroUser)
    } 
    
    somaNumeros = numeroSorteado + numeroUser
    escreva("O computador jogou ",numeroSorteado, "\n")
    se((somaNumeros % 2 == 1)e(escolhaUser == "P")){
      escreva("Que pena, você perdeu pois a soma deu ", somaNumeros)
    }
    senao {
      escreva("Parabéns, você ganhou!!! \n")
      escreva("A soma deu ", somaNumeros)   
    }
  }
}
