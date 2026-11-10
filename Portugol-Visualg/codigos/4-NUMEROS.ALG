Algoritmo "4-numeros"

//  Faça um algoritmo que faça uma leitura de 4 valores numéricos,
//  onde os 2 primeiros serão inteiros e os dois últimos reais e
//  obtenha os seguintes resultados: a.   valor absoluto da soma dos 4
//  valores lidos; b.   o quociente entre os 2 números inteiros; c.   o
//  arredondamento da soma dos números reais; d.   o resto entre os 2
//  números inteiros e.   a parte inteira entre a soma de todos os números 8

Var
   ni1, ni2: inteiro
   nr1, nr2: real
   somaTotal, absSoma, quocienteInt, somaReais, arredondaReais: real
    
Inicio
      escreva("Olá, digite um número inteiro: ")
      leia(ni1)
      escreva("Digte outro número inteiro: ")
      leia(ni2)
      escreva("Agora digite um número real: ")
      leia(nr1)
      escreva("Digte outro número real: ")
      leia(nr2)
      limpatela
      somaTotal <- ni1 + ni2 + nr1 + nr2
      absSoma <- abs(somaTotal)
      escreval("A soma dos 4 números digitados é",absSoma)
      escreval("-----------------------------------------------------")
      quocienteInt <- ni1/ni2
      escreval("O quociente dos dois números inteiros é ",quocienteInt:1:2)
      escreval("-----------------------------------------------------")
      somaReais <- nr1 + nr2
      arredondaReais <-somaReais
      escreval("O arredondamento da soma dos números reais é",arredondaReais:3:0)
      escreval("-----------------------------------------------------")
      escreval("O resto dos dois números inteiros é ",ni1 % ni2)
      escreval("-----------------------------------------------------")
      escreval("A parte inteira entre a soma total é ",int(somaTotal))


Fimalgoritmo