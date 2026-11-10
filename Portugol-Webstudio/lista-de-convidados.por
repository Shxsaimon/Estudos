programa {
  inclua biblioteca Util --> u
  funcao inicio() {
    cadeia convidados[5]
    caracter respostaAdd
    inteiro nmrConvidados=0, tamanhoLista

    para(inteiro i=0; i<5; i++){
      convidados[i] = "vazio"
    }

    escreva(" ---- Lista de Convidados ----\n")
    escreva("Quer adicionar um convidado a lista? [S/N]\n")
    leia(respostaAdd)

    tamanhoLista = u.numero_elementos(convidados)

    enquanto((respostaAdd!="s")e(respostaAdd!="S")e(respostaAdd!="n")e(respostaAdd!="N")){
      escreva("Por favor, digite um dos comandos descritos para continuar [S] ou não [N] a lista!\n")
      leia(respostaAdd)
    }
    enquanto((respostaAdd == "S")ou(respostaAdd =="s") ){
      
      escreva("Digite o nome do convidado: \n")
      leia(convidados[nmrConvidados])
      nmrConvidados = nmrConvidados + 1
      se(nmrConvidados==tamanhoLista){
        escreva("Voçê atingiu o número máximo de convidados! \n")
        pare
      }
      escreva("Quer continuar a adicionar convidados na lista? [S/N]\n")
      leia(respostaAdd)
        enquanto((respostaAdd!="s")e(respostaAdd!="S")e(respostaAdd!="n")e(respostaAdd!="N")){
          escreva("Por favor, digite um dos comandos descritos para continuar [S] ou não [N] a lista!\n")
          leia(respostaAdd)
        }
      
    }

    escreva("Fim da lista. Você possui ",nmrConvidados," convidados. São eles: \n")
    para(inteiro i=0; i<5;i++){
      escreva(convidados[i],"\n")
    }
  }
}
