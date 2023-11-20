lista_produtos = ['máscaras faciais', 'batons', 'esmaltes', 'perfumes', 'loções', 'xampus', 'sabonetes', 'delineadores'] 

lista_produtos.pop()
lista_produtos.append('lapis de olho')
lista_produtos.append("blush")
lista_produtos[1], lista_produtos[4] = "rímel", "creme hidratante"
print(lista_produtos)
for i in range(len(lista_produtos)):
    print("Temos",lista_produtos[i],"à venda!")