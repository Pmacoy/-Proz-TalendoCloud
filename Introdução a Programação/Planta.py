print('Inicia programa rega while')
contador = 0
while(contador < 6):
    planta = contador
    print('Regar planta nº: ', planta)
    contador += 1
print('Termina programa rega while \n')

print('Inicia programa tomate while')
contador = 0
while(contador < 6):
    planta = contador
    print('Regar planta nº: ', planta)
    contador += 2
print('Termina programa tomate while \n')

print('Inicia programa tomate for')
for i in range(0,5,2):
    print('Regar planta nº: ', i)
    i = i + 2