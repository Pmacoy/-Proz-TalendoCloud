def achar_elemento(elem, arr):
    achou = False
    cumprimento = len(arr)

    for i in range(cumprimento):
        if (arr[i] == elem):
            achou = True

    if(achou == True):
        print('Achamos o nome: ', elem)
    else:
        print('Não achei o nome ', elem)

nomes = ['Rafael', 'Arturo', 'Karen', 'Julia']
achar_elemento('Paulo', nomes)

