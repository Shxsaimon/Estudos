Algoritmo "Salario-com-desconto-e-liquido"

//  Faça um algoritmo que leia o nome e o salário bruto de um
//  funcionário. Sabendo que o imposto a ser descontado é de 5%
//  sobre o salário bruto, calcule o salário líquido. O salário líquido não
//  deverá possuir parte fracionária. Escreva o nome do funcionário, o
//  salário bruto, 0 valor do desconto e o salário líquido.
Var
   funcionario: caractere
   salarioBruto, salarioLiquido, desconto: real


Inicio
   escreva("Digite o nome do funcionário: ")
   leia(funcionario)
   escreva("Digite o salário bruto do funcionário: R$")
   leia(salarioBruto)
   
   salarioLiquido <- (salarioBruto * 0.95)
   desconto <- (salarioBruto * 0.05)
   limpatela

   escreval("     Dados do Funcionário")
   escreval("---------------------------------")
   escreval("Funcioário: ",funcionario)
   escreval("Salário Bruto: R$",salarioBruto:4:2)
   escreval("Desconto: R$",desconto:4:2)
   escreval("Salário Líquido: R$",salarioLiquido:4:0)



Fimalgoritmo