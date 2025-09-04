Algoritmo "Receita-Lucro-Despesas"
//   Faça um algoritmo em que o usuário irá fornecer a receita e as
//   despesas de uma empresa e obtenha como resultado o lucro e o
//   percentual das despesas em relação a receita

Var
   receita, lucro, despesas, percDespesas: real
    
Inicio
      escreva("Olá, digite a receita de sua empresa: ")
      leia(receita)
      escreva("Agora as suas despesas: ")
      leia(despesas)
      lucro <- (receita - despesas)
      percDespesas <- (despesas/receita)*100
      escreval("Seu lucro foi de R$",lucro)
      escreval("E o percentual de despesas em relação a sua receita é de",percDespesas,"%")
      
      
Fimalgoritmo