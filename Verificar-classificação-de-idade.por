programa {
  funcao inicio() {

    inteiro idade

    escreva("Olá, digite a sua idade para verificar quais conteúdos poderá ter acesso: ")
    leia(idade)
    se (idade<10){
      escreva("Você poderá ter acesso apenas a conteúdos classificados como Livres.\n")
    } senao se ((idade>=10)e(idade<12)){
        escreva("Você poderá ter acesso a conteúdos classificados para até 10 anos.\n")
    } senao se ((idade>=12)e(idade<14)){
        escreva("Você poderá ter acesso a conteúdos classificados para até 12 anos.\n")
    } senao se ((idade>=14)e(idade<16)){
        escreva("Você poderá ter acesso a conteúdos classificados para até 14 anos.\n")
    } senao se ((idade>=16)e(idade<18)){
        escreva("Você poderá ter acesso a conteúdos classificados para até 16 anos.\n")
    } senao se (idade>18){
        escreva("Você poderá ter acesso a todas as classificações de conteúdos.\n")
    }
    
  }
}
