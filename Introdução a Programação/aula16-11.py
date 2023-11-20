def mostraNumero():
    print('Escreva um numero menor que 100')
    numero_valido = False

    while(numero_valido == False):
        try:
            num = int(input())
            if(num > 100):
                print('O numero precisa ser menor ou igual a 100')
            elif(num <= 0):
                print('O numero precisa ser maior que 0')
            else:
                print('Boa! O numero escolhido foi:', num)
                numero_valido = True
        except:
            print('Precisa digitar um numero inteiro')
mostraNumero()
print('Termina programa mostrar numero\n')

def numero_par():
    print('Escreva um numero par')
    numero_par = False

    while(numero_par == False):
        try:
            num = int(input())
            if(num % 3 == 0):
                print('O numero inserido foi impar:', num)
                print('Escreva um numero par')
            elif(num % 2 == 0):
                print('Muito bem! O numero par é:', num)
                numero_par = True    
        except:
            print('São aceitos apenas numeros inteiros')
numero_par()
print('Termina programa numero par\n')

def calcular_area_retangulo():
    print('Digite o comprimento do retangulo')
    comprimento = float(input())

    print('Digite a largura do retangulo')
    largura = float(input())

    area = comprimento * largura
    print('A area do retangulo é:', area)
    
calcular_area_retangulo()
print('Termina programa area do retangulo\n')