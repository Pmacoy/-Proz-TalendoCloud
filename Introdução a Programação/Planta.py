print('Inicia programa rega while')
contador = 0
while(contador < 6):
    planta = contador
    print('Regar planta nº: ', planta)
    contador += 1
print('Termina programa rega while \n')

print('Inicia programa rega for')
for i in range(6):
    print('Regar planta nº: ', i)
    i = i + 1
print('Termina programa rega for \n')

print('Inicia programa rega par while')
contador = 0
while(contador < 6):
    planta = contador
    print('Regar planta nº: ', planta)
    contador += 2
print('Termina programa rega par while \n')

print('Inicia programa rega par for')
for i in range(0,5,2):
    print('Regar planta nº: ', i)
    i = i + 2
print('Termina programa rega par for \n')

print('Inicia programa rega inversa while')
contador = 5
while(contador >= 0):
    planta = contador
    print('Regar planta nº: ', planta)
    contador -= 1
print('Termina programa rega inversa while \n')

print('Inicia programa rega inversa for')
for i in range(5, -1 , -1):
    print('Regar planta nº: ', i)
    i = i + 1
print('Termina programa rega inversa for \n')

print('Inicia programa rega confusa while')
contador = 0
while(contador < 6 ):
    planta = contador
    contador += 1
    if planta in (2, 3):
        continue
    print('Regar planta nº: ', planta)
print('Termina programa rega confusa while \n')

print('Inicia programa rega confusa for')
for planta in range(-1, 5):
    if (planta == 1 or planta == 2):
        continue
    planta = planta + 1
    print('Regar planta nº: ', planta)
print('Termina programa rega confusa for \n')

print('Inicia programa rega batata while')
contador = 3
while(contador < 6 ):
    planta = contador
    contador += 1
    print('Regar planta nº: ', planta)
print('Termina programa rega batata while \n')

print('Inicia programa rega batata for')
for planta in range(2, 5):
    planta = planta + 1
    print('Regar planta nº: ', planta)
print('Termina programa rega batata for \n')