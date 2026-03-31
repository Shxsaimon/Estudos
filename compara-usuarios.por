programa {
  funcao inicio() {

    cadeia usuarioMatriz, usuarioCompara

    escreva("Bem-vindo à tela de login!\n")
    escreva("Digite o seu usuário: \n")
    leia(usuarioMatriz)
    escreva("Digite novamente seu usuário: \n")
    leia(usuarioCompara)

    se(usuarioMatriz==usuarioCompara){
      escreva("Os usuários coincidem, tudo certo!")
    } senao{
        enquanto(usuarioMatriz != usuarioCompara){
        escreva("Erro!!! Os usuários não coincidem!\n")
        escreva("Digite novamente o seu usuário: ")
        leia(usuarioCompara)
        } 
        escreva("Os usuários coincidem, tudo certo!")
      }
      
  }
}
