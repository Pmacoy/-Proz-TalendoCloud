print("Primeiro programa")
def achar_elemento(elem, arr):
    achou = False #trata o achou sempre como falso
    cumprimento = len(arr)

    for i in range(cumprimento):
        if (arr[i] == elem):
            achou = True #condição quando verdadeira

    if(achou == True): #se a condição for verdadeira
        print('Achamos o nome: ', elem)
    else: #se a condição for falsa
        print('Não achei o nome ', elem)

nomes = ['Rafael', 'Arturo', 'Karen', 'Julia']
achar_elemento('Paulo', nomes)
print("################# Fim do primeiro################## \n")


print("Segundo programa com interação user")
nome = input('Digite o nome:')
nome = nome.title()
def achar_elemento(nome, arr):
    achou = False #trata o achou sempre como falso
    cumprimento = len(arr)

    for i in range(cumprimento):
        if (arr[i] == nome):
            achou = True #condição quando verdadeira

    if(achou == True): #se a condição for verdadeira
        print('Achamos o nome: ', nome)
    else: #se a condição for falsa
        print('Não achei o nome ', nome)

nomes = ['Rafael', 'Arturo', 'Karen', 'Julia']
achar_elemento(nome, nomes)
print("################# Fim do segundo################## \n")


print("Terceiro programa com interação user usando while")
def achar_elemento(arr):
    achou = False  #trata o achou sempre como falso
    frase = ""

    while(achou == False):
        print('Qual nome deseja procurar?')
        nome = input()
        nome = nome.title()

        for i in range(len(arr)): #condição quando verdadeiro
            if arr[i] == nome:
                achou = True

        if(achou == False): #se a condição for falsa
            frase = 'Não achei o nome ' + nome
            print(frase)
        else: #se for verdadeira
            print('Achamos o nome: ', nome)

nomes = ['Rafael', 'Arturo', 'Karen', 'Julia']
achar_elemento(nomes)
print("################# Fim do terceiro################## \n")