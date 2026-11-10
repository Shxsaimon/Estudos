programa {
	funcao inicio() {
	    real hipo, catA, catB
		
		escreva("Vamos verificar se o triângulo é um triângulo retângulo?\n")
		escreva("Digite o maior valor: \n")
		leia(hipo)
		
		escreva("Digite o valor do próximo lado: \n")
		leia(catA)
		
		escreva("Digite o do último lado: \n")
		leia(catB)
		
		se(quadrado(hipo) == (quadrado(catA))+(quadrado(catB))){
		    escreva("É um triângulo retângulo!\n")
		}
		senao{
		    escreva("Não é um triângulo retângulo!\n")
		}
		
	}
	
	funcao real quadrado(real valor){
	    real quad
	    quad = valor*valor
	    retorne quad
	}
}
