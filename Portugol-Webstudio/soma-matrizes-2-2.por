programa {
  funcao inicio() {
    inteiro matriz1[2][2], matriz2[2][2], matriz3[2][2]

    escreva("||| SOMADOR DE MATRIZES DE TAMANHO 2X2 |||\n\n")

    escreva("Matriz 1: \n")
    para(inteiro i = 0; i < 2; i++){
      para(inteiro j = 0; j < 2; j++){
        escreva("Digite um valor: \n")
        leia(matriz1[i][j])
      }
    }
    escreva("\n")
    escreva("Matriz 2: \n")
    para(inteiro i = 0; i < 2; i++){
      para(inteiro j = 0; j < 2; j++){
        escreva("Digite um valor: \n")
        leia(matriz2[i][j])
      }
    }

    para(inteiro i =0; i<2; i++){
      para(inteiro j = 0; j<2; j++){
        matriz3[i][j] = matriz1[i][j] + matriz2 [i][j]
      }
    }

    escreva("\nA soma dos valores das duas matrizes resultou em:\n")
    para(inteiro i = 0; i < 2; i++){
      para(inteiro j = 0; j < 2; j++){
        escreva("\t\t[",matriz3[i][j],"]")
      }
      escreva("\n")
    }
  }
}
