#Minha Resolução
def par():
    try:
        numero = int(input("Insira um numero par: "))
        if (numero % 2 == 0 ):
            print("O numero par digitado foi: ", numero)
        elif (numero % 2 != 0):
            print('Numero digitado não é par')
            par()
    except:
        print('Valor digitado não é um numero')
        par()
par()

#Resolução Site
numeroCorreto = False
while (numeroCorreto == False):
   print("Insira um número par")
   try:
       numero = int(input())
       if (numero%2 == 0):
           numeroCorreto = True
           print("Você digitou um numero par !")
       else :
           print("Você digitou um número impar")
   except:
       print("Caracter inválido, por favor digite um número par")